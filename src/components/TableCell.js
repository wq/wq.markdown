import React from 'react';
import { TableCell as MTableCell } from '@wq/material';

export default function TableCell({ align, ...rest }) {
    if (align === null) {
        align = undefined;
    }
    return <MTableCell align={align} {...rest} />;
}
