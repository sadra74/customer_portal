import React from 'react';
import '../../assets/framework.css';
import {ComponentDiv} from "../../assets/styled-components";
export class ComponentParams {
    children?: React.ReactNode;
    justifyContent?: string;
    alignItems?: string;
    position?: any;
    flex?: number;
    component?: any;
    componentParams?: any;
    border?: string;
    margin?: string;
    padding?: string;
    minWidth?: string;
    minHeight?: string;
    width?: string;
    maxWidth?: string;
    maxHeight?: string;
}

export function Component(props: ComponentParams) {
    return (
            <ComponentDiv {...props}>
                {React.createElement(props.component, {...props.componentParams})}
            </ComponentDiv>
    );
}
