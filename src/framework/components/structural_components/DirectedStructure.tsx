import React, {useRef} from 'react';
import '../../assets/framework.css';
import {HelperMethods} from "../../utils/helper-methods";
import {FlexItemDiv} from "../../assets/styled-components";

export class FlexDivParams {
    flex?: any;
    justifyContent?: string;
    alignItems?: string;
    direction?: string;
    children?: any;
    border?: string;
    margin?: string;
    padding?: string;
    overflowX?: string;
    overflowY?: string;
    minWidth?: string;
    maxWidth?: string;

}

export const DirectedStructure = React.forwardRef((props: FlexDivParams, ref: React.Ref<HTMLDivElement>) =>{
    return (
        <FlexItemDiv {...props} className={props.direction} ref={ref}>
            {HelperMethods.createAnArrayFromSingleObjectIfItIsNotArrayAlready(props.children).map((child: any, index: number) => {
                return (
                    <FlexItemDiv {...child?.props} key={index} className={props.direction + '-item'} >
                        {child}
                    </FlexItemDiv>
                );
            })}
        </FlexItemDiv>
    );
});

