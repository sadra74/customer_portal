import React from 'react';
import '../../assets/framework.css';
import {ComponentDiv} from "../../assets/styled-components";
export interface ComponentParams {
    children?: React.ReactNode;
    justifyContent?: string;
    alignItems?: string;
    position?: any;
    flex?: number;
    component?: any;
    border?: string;
    margin?: string;
    padding?: string;
    minWidth?: string;
    minHeight?: string;
    width?: string;
    maxWidth?: string;
}

export function Component(props: ComponentParams) {
    return (
            <ComponentDiv {...props}>
                {React.createElement(props.component)}
            </ComponentDiv>
    );
}
