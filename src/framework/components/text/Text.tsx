import React from "react";
import {TextSpan} from "../../assets/styled-components";


export interface TextParams {
    text?: string;
    color?: string;
    fontSize?: string;
    fontWeight?: number;
    fontFamily?: string
    textAlign?: string;
}

export function Text(props: TextParams) {
    return (

        <TextSpan
            color={props.color}
            fontSize={props.fontSize}
            textAlign={props.textAlign}
            fontWeight={props.fontWeight}
            fontFamily={props.fontFamily}>
            {props.text}
        </TextSpan>

    );
}
