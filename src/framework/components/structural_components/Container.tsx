import React from 'react';
import '../../assets/framework.css';
import {ContainerDiv} from "../../assets/styled-components";


export interface ContainerParams {
    isContained?: boolean;
    children: any;
    margin?: string;
    padding?: string;
    border?: string;
    minWidth?: string;
    overflow?: string;
    backgroundColor?: string;

}

export function Container(props: ContainerParams) {
    return (
        <ContainerDiv {...props} className={props.isContained === true ? 'child-container' : 'container'}>
            {props.children}
        </ContainerDiv>
    );
}
