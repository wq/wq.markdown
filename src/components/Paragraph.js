import React from 'react';
import { Typography } from '@wq/material';

/*eslint no-unused-vars: ["error", { "ignoreRestSiblings": true }]*/
export default function Paragraph({ node, ...props }) {
    return <Typography {...props} paragraph variant="body1" />;
}
