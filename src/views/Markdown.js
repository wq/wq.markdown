import React from 'react';
import ReactMarkdown from 'react-markdown';
import { View, ScrollView } from '@wq/material';
import { useRenderContext, usePlugin } from '@wq/react';

import renderers from '../renderers';

export default function Markdown() {
    const {
            config: { input },
        } = usePlugin('markdown'),
        context = useRenderContext(),
        markdown =
            context[input] ||
            `No content found in ${input} for ${context.router_info.name}`;

    return (
        <ScrollView>
            <View style={{ display: 'flex', justifyContent: 'center' }}>
                <ReactMarkdown renderers={renderers}>{markdown}</ReactMarkdown>
            </View>
        </ScrollView>
    );
}
