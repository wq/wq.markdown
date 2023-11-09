import React from "react";
import SyntaxHighlighter from "./SyntaxHighlighter";

export default function Code({ children, className, ...rest }) {
    const language =
        className && className.startsWith("language-")
            ? className.replace("language-", "")
            : null;
    if (!language) {
        return (
            <code {...rest} className={className}>
                {children}
            </code>
        );
    }
    return (
        <SyntaxHighlighter
            language={language}
            style={{
                fontSize: "0.9rem",
                padding: "1em",
                border: "1px solid #eef",
            }}
        >
            {children}
        </SyntaxHighlighter>
    );
}
