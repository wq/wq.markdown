import React from 'react';
import { Typography } from '@wq/material';

export default function Heading({ node, children, ...props }) {
    const variants = {
        1: 'h3',
        2: 'h4',
        3: 'h5',
        4: 'h6',
        5: 'subtitle1',
        6: 'subtitle2',
    };
    let id;
    if (props.level > 1 && node.children[0].type === 'text') {
        id = node.children[0].value.toLowerCase().replace(/\W+/g, '-');
    }
    return (
        <Typography
            {...props}
            id={id}
            gutterBottom
            variant={variants[props.level]}
            style={{
                marginTop: props.level > 1 ? '0.8em' : null,
            }}
        >
            {children}
            {id && (
                <>
                    {' '}
                    <a
                        href={'#' + id}
                        style={{
                            fontSize: '0.7em',
                            verticalAlign: 'middle',
                            color: '#bbb',
                            textDecoration: 'none',
                        }}
                    >
                        #
                    </a>
                </>
            )}
        </Typography>
    );
}
