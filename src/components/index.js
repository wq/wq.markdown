import Paragraph from "./Paragraph";
import Heading from "./Heading";
import Blockquote from "./Blockquote";
import Link from "./Link";
import Code from "./Code";
import TableCell from "./TableCell";
import { Table, TableHead, TableBody, TableRow } from "@wq/material";

export default {
    p: Paragraph,
    h1: Heading,
    h2: Heading,
    h3: Heading,
    h4: Heading,
    h5: Heading,
    h6: Heading,
    blockquote: Blockquote,
    a: Link,
    code: Code,
    table: Table,
    thead: TableHead,
    tbody: TableBody,
    tr: TableRow,
    td: TableCell,
    th: TableCell,
};
