import React from 'react';
import react, { useRenderContext, usePlugin } from '@wq/react';
import Markdown from './Markdown';

const { Index } = react.config.views;

export default function MarkdownIndex() {
    const {
            config: { input },
        } = usePlugin('markdown'),
        context = useRenderContext();

    if (input in context) {
        return <Markdown />;
    } else {
        return <Index />;
    }
}
