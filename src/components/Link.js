import React from "react";
import { Link as WQLink } from "@wq/material";

const OpenInNew =
    "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' style='width:24px;height:24px' viewBox='0 0 24 24'%3E%3Cpath fill='currentColor' d='M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z' /%3E%3C/svg%3E";

/*eslint no-unused-vars: ["error", { "ignoreRestSiblings": true }]*/
export default function Link({ node, href, children, ...props }) {
    if (href.startsWith("http")) {
        return (
            <WQLink
                {...props}
                href={href}
                rel="external"
                target="_blank"
                component="a"
            >
                {children}
                <img
                    src={OpenInNew}
                    style={{
                        width: 16,
                        height: 16,
                        marginLeft: 2,
                        verticalAlign: "middle",
                        opacity: 0.5,
                    }}
                />
            </WQLink>
        );
    } else if (href.startsWith("#")) {
        return (
            <WQLink {...props} href={href} component="a">
                {children}
            </WQLink>
        );
    } else {
        return (
            <WQLink {...props} to={href}>
                {children}
            </WQLink>
        );
    }
}
