import React from 'react';
import react, {
    useRenderContext,
    usePlugin,
    useList,
    useReverse,
} from '@wq/react';
import { View, ListItemLink, Chip, List } from '@wq/material';
import Markdown from './Markdown';

const { DefaultList } = react.config.views;

export default function MarkdownList() {
    const {
            config: { input, autoindex, tags },
        } = usePlugin('markdown'),
        context = useRenderContext();

    if (input in context) {
        return (
            <Markdown>
                {context[autoindex] !== false && <PageList tags={tags} />}
            </Markdown>
        );
    } else {
        return <DefaultList />;
    }
}

function PageList({ tags }) {
    const { list, empty, page_config } = useList(),
        { page } = page_config,
        reverse = useReverse();
    return (
        <List>
            {list.map((item) => (
                <ListItemLink
                    to={reverse(`${page_config.page}_detail`, item.id)}
                    icon={item.icon}
                >
                    {item[tags] ? (
                        <View style={{ display: 'flex' }}>
                            <span style={{ flex: 1 }}>{item.label}</span>
                            <View>
                                {item[tags].map((tag) => (
                                    <Chip
                                        size="small"
                                        variant="outlined"
                                        {...tag}
                                    />
                                ))}
                            </View>
                        </View>
                    ) : (
                        item.label
                    )}
                </ListItemLink>
            ))}
        </List>
    );
}
