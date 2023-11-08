import React from "react";
import SyntaxHighlighter from "./SyntaxHighlighter";

export default function Code({ language, value }) {
    return (
        <SyntaxHighlighter
            language={language}
            style={{
                fontSize: "0.9rem",
                padding: "1em",
                border: "1px solid #eef",
            }}
        >
            {value}
        </SyntaxHighlighter>
    );
}
