import Root from './components/Root';
import Paragraph from './components/Paragraph';
import Heading from './components/Heading';
import Blockquote from './components/Blockquote';
import Link from './components/Link';
import Code from './components/Code';
import TableCell from './components/TableCell';
import { Table, TableHead, TableBody, TableRow } from '@wq/material';

export default {
    paragraph: Paragraph,
    heading: Heading,
    blockquote: Blockquote,
    link: Link,
    linkReference: Link,
    code: Code,
    table: Table,
    tableHead: TableHead,
    tableBody: TableBody,
    tableRow: TableRow,
    tableCell: TableCell,
};
