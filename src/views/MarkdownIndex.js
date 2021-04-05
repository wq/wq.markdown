import React from 'react';
import {
    Index as DefaultIndex,
    useRenderContext,
    usePlugin,
    useApp,
    useSitemap,
    useReverse,
    useRouteTitle,
} from '@wq/react';
import {
    View,
    List,
    ListItemLink,
    ListSubheader,
    ExpandableListItem,
} from '@wq/material';
import Markdown from './Markdown';

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
            const section = getArray(sections, page.section || ''),
                lastPage = section[section.length - 1],
                route = page.list ? `${page.name}_list` : page.name;

            let group;
            if (!page.subsection) {
                group = section;
            } else {
                if (
                    lastPage &&
                    lastPage.isSubsection &&
                    lastPage.label === page.subsection
                ) {
                    group = lastPage.pages;
                } else {
                    const subsection = {
                        label: page.subsection,
                        icon: page.icon,
                        isSubsection: true,
                        pages: [],
                    };
                    section.push(subsection);
                    group = subsection.pages;
                }
            }
            group.push({
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
                    {pages.map((page) =>
                        page.isSubsection ? (
                            <ExpandableListItem icon={page.icon}>
                                <>{page.label}</>
                                {page.pages.map((page) => (
                                    <ListItemLink
                                        key={page.name}
                                        to={reverse(page.route)}
                                        icon={page.icon}
                                        style={{ paddingLeft: 32 }}
                                    >
                                        {page.label}
                                    </ListItemLink>
                                ))}
                            </ExpandableListItem>
                        ) : (
                            <ListItemLink
                                key={page.name}
                                to={reverse(page.route)}
                                icon={page.icon}
                            >
                                {page.label}
                            </ListItemLink>
                        )
                    )}
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

function getArray(obj, key) {
    if (!obj[key]) {
        obj[key] = [];
    }
    return obj[key];
}
