import React from "react";

/*eslint no-unused-vars: ["error", { "ignoreRestSiblings": true }]*/
export default function Blockquote({ node, ...props }) {
    return (
        <blockquote
            style={{
                margin: "1em",
                paddingTop: "1em",
                paddingLeft: "1em",
                paddingRight: "1em",
                paddingBottom: 0,
                backgroundColor: "#ffe",
                border: "2px solid #ee8",
            }}
            {...props}
        />
    );
}
