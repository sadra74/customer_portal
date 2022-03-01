import React from "react";
import {CardDiv} from "../../assets/styled-components";
import {Container} from "../structural_components/Container";
import {Horizontal} from "../structural_components/Horizontal";
import {Template} from "../structural_components/Template";
import {Empty} from "../structural_components/Empty";

export interface CardParams {
    color?: string;
    onClick?: () => void;
    borderRadius?: string;
    width?: string;
    height?: string;
    fontSize?: string;
    backgroundColor?: string;
    border?: string;
    children?: any;
    icon?: any;
};


export function Card(props: CardParams) {
    function iconIfPresent() {
        return <>{props.icon ? <Template flex={1}>{props.icon}</Template> : null}</>;
    }

    return (
        <CardDiv {...props}>
            <Container isContained={true}>
                <Horizontal>
                    <Empty flex={1}/>
                    {iconIfPresent()}
                    <Template flex={8}>{props.children}</Template>
                </Horizontal>
            </Container>
        </CardDiv>
    );
}
