import React, {useRef} from "react";
import {Container} from "../../framework/components/structural_components/Container";
import {Vertical} from "../../framework/components/structural_components/Vertical";
import {Component} from "../../framework/components/structural_components/Component";
import {ScrollButton} from "./ScrollButton";
import {Horizontal} from "../../framework/components/structural_components/Horizontal";
import {ImageCard} from "./ImageCard";

export function Slider() {
    const horizontal = useRef(null);
    return <Container isContained={true}>
        <Vertical>
            <Component justifyContent={"flex-end"} flex={1} component={ScrollButton} componentParams={{
                rightButtonClicked: () => {
                    (horizontal.current as unknown as HTMLDivElement).scrollLeft += 100;
                },
                leftButtonClicked: () => {
                    (horizontal.current as unknown as HTMLDivElement).scrollLeft -= 100;
                }
            }}/>
            <Horizontal ref={horizontal} flex={5} overflowX={"auto"} overflowY={"auto"} alignItems={'flex-start'} justifyContent={"flex-start"}>
                {Array.from(Array(100).keys()).map(() => {
                    return <Component minHeight={"400px"} maxHeight={"400px"} maxWidth={"200px"} minWidth={"200px"} flex={1} margin={'5px'}
                                      component={ImageCard}/>
                })}
            </Horizontal>
        </Vertical>
    </Container>;
}
