import React from 'react';
import '../../assets/framework.css';
import {DirectedStructure, FlexDivParams} from "./DirectedStructure";

export const Horizontal =React.forwardRef((props: FlexDivParams, ref: React.Ref<HTMLDivElement>) => {
    return (
        <DirectedStructure ref={ref} {...props} direction="horizontal" />
    );
})

