import React from 'react';
import '../../assets/framework.css';
import {DirectedStructure, FlexDivParams} from "./DirectedStructure";

export function Horizontal(props: FlexDivParams) {
    return (
        <DirectedStructure {...props} direction="horizontal" />
    );
}
