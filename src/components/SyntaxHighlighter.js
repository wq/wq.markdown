import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter/src/light';
import hljsStyle from 'react-syntax-highlighter/src/styles/hljs/docco';

import bash from 'react-syntax-highlighter/src/languages/hljs/bash';
import javascript from 'react-syntax-highlighter/src/languages/hljs/javascript';
import python from 'react-syntax-highlighter/src/languages/hljs/python';
import xml from 'react-syntax-highlighter/src/languages/hljs/xml';

SyntaxHighlighter.registerLanguage('bash', bash);
SyntaxHighlighter.registerLanguage('javascript', javascript);
SyntaxHighlighter.registerLanguage('python', python);
SyntaxHighlighter.registerLanguage('xml', xml);

export default function HighlighterWithStyle({
    language,
    children,
    style,
    ...rest
}) {
    return (
        <SyntaxHighlighter
            style={hljsStyle}
            customStyle={style}
            language={language}
            {...rest}
        >
            {children}
        </SyntaxHighlighter>
    );
}
