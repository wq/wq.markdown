import React from "react";
import { View, Table as MTable } from "@wq/material";

export default function Table(props) {
    return (
        <View style={{ overflowX: "auto" }}>
            <MTable {...props} />
        </View>
    );
}
