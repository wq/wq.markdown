import React from 'react';
import { DefaultDetail, useRenderContext, usePlugin } from '@wq/react';
import { Fab } from '@wq/material';
import Markdown from './Markdown';

export default function MarkdownDetail() {
    const {
            config: { input, getEditUrl },
        } = usePlugin('markdown'),
        context = useRenderContext(),
        editUrl = getEditUrl(context.router_info);

    if (input in context) {
        return (
            <>
                <Markdown />
                {editUrl && <Fab icon="edit" component="a" href={editUrl} />}
            </>
        );
    } else {
        return <DefaultDetail />;
    }
}
