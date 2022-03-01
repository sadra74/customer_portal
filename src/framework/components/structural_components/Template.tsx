import React from 'react';
import '../../assets/framework.css';
import {TemplateDiv} from "../../assets/styled-components";
export interface TemplateParams {
    children?: React.ReactNode;
    justifyContent?: string;
    alignItems?: string;
    position?: any;
    flex?: number;
    top?: any;
    left?: any;
    right?: any;
    bottom?: any;
    margin?: string;
    padding?: string;
    zIndex?: number;
}

export function Template(props: TemplateParams) {
    return (
        <TemplateDiv {...props}>
            {props.children}
        </TemplateDiv>
    );
}
