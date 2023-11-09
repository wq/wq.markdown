import React from "react";
import { Index as DefaultIndex, useRenderContext, usePlugin } from "@wq/react";
import Markdown from "./Markdown";

export default function MarkdownIndex() {
    const {
            config: { input, autoindex },
        } = usePlugin("markdown"),
        context = useRenderContext();

    if (input in context) {
        return (
            <Markdown>
                {context[autoindex] !== false && <DefaultIndex />}
            </Markdown>
        );
    } else {
        return <DefaultIndex />;
    }
}
