import React from 'react';
import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';
import { List, View, ScrollView } from '@wq/material';
import { useRenderContext, usePlugin } from '@wq/react';

import renderers from '../renderers';

export default function Markdown({ children }) {
    const {
            config: { input },
        } = usePlugin('markdown'),
        context = useRenderContext(),
        markdown =
            context[input] ||
            `No content found in ${input} for ${context.router_info.name}`;

    return (
        <ScrollView>
            <View
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <List
                    component="div"
                    style={{
                        width: '100%',
                        maxWidth: 1000,
                        padding: '1em 2em',
                    }}
                >
                    <ReactMarkdown renderers={renderers} plugins={[gfm]}>
                        {markdown}
                    </ReactMarkdown>
                    {children}
                </List>
            </View>
        </ScrollView>
    );
}
