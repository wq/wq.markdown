import React from 'react';
import react, {
    useRenderContext,
    usePlugin,
    useApp,
    useSitemap,
    useReverse,
    useRouteTitle,
} from '@wq/react';
import { View, List, ListItemLink, ListSubheader } from '@wq/material';
import Markdown from './Markdown';

const { Index: DefaultIndex } = react.config.views;

export default function MarkdownIndex() {
    const {
            config: { input, autoindex },
        } = usePlugin('markdown'),
        context = useRenderContext();

    if (input in context) {
        return <Markdown>{context[autoindex] !== false && <Index />}</Markdown>;
    } else {
        return <DefaultIndex />;
    }
}

function Index() {
    const { options, models } = useSitemap(),
        reverse = useReverse(),
        routeTitle = useRouteTitle(),
        sections = {};

    options
        .concat(models)
        .filter((page) => page.show_in_index !== false)
        .sort(orderSort)
        .forEach((page) => {
            const section = page.section || '',
                route = page.list ? `${page.name}_list` : page.name;
            if (!sections[section]) {
                sections[section] = [];
            }
            sections[section].push({
                ...page,
                route,
                label:
                    (page.list && page.verbose_name_plural) ||
                    routeTitle(route),
            });
        });
    return (
        <List>
            {Object.entries(sections).map(([section, pages]) => (
                <>
                    {!!section && <ListSubheader>{section}</ListSubheader>}
                    {pages.map((page) => (
                        <ListItemLink
                            key={page.name}
                            to={reverse(page.route)}
                            icon={page.icon}
                        >
                            {page.label}
                        </ListItemLink>
                    ))}
                </>
            ))}
        </List>
    );
}

function orderSort(a, b) {
    if (a.order > b.order) {
        return 1;
    } else if (a.order < b.order) {
        return -1;
    } else {
        return 0;
    }
}
