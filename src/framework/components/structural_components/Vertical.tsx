import React from 'react';
import '../../assets/framework.css';
import {DirectedStructure, FlexDivParams} from "./DirectedStructure";

export function Vertical(props: FlexDivParams) {
    return (
        <DirectedStructure direction="vertical" {...props}/>
    );
}
