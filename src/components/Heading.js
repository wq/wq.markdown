import React from "react";
import { Typography } from "@wq/material";

export default function Heading({ node, children, ...props }) {
    const variants = {
        h1: "h3",
        h2: "h4",
        h3: "h5",
        h4: "h6",
        h5: "subtitle1",
        h6: "subtitle2",
    };
    let id;
    if (node.tagName > "h1" && node.children[0].type === "text") {
        id = node.children[0].value
            .toLowerCase()
            .replace(/[^\w\- ]/g, "")
            .replace(/ +/g, "-");
    }
    return (
        <Typography
            {...props}
            id={id}
            gutterBottom
            variant={variants[node.tagName]}
            style={{
                marginTop: node.tagName > "h1" ? "0.8em" : null,
            }}
        >
            {children}
            {id && (
                <>
                    {" "}
                    <a
                        href={"#" + id}
                        style={{
                            fontSize: "0.7em",
                            verticalAlign: "middle",
                            color: "#bbb",
                            textDecoration: "none",
                        }}
                    >
                        #
                    </a>
                </>
            )}
        </Typography>
    );
}
