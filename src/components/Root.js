import React from "react";
import { List } from "@wq/material";

/*eslint no-unused-vars: ["error", { "ignoreRestSiblings": true }]*/
export default function Root({ node, ...props }) {
    return (
        <List
            component="div"
            style={{ width: "100%", maxWidth: 1000, padding: "1em 2em" }}
            {...props}
        />
    );
}
