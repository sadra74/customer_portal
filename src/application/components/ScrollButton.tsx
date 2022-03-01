
import React from "react";
import {Container} from "../../framework/components/structural_components/Container";
import {Vertical} from "../../framework/components/structural_components/Vertical";
import {Horizontal} from "../../framework/components/structural_components/Horizontal";
import {Template} from "../../framework/components/structural_components/Template";
import {Card} from "../../framework/components/card/Card";
import {LeftOutlined, RightOutlined} from "@ant-design/icons";
import {EventBus} from "../../framework/utils/event-bus";


export function ScrollButton(props: {rightButtonClicked: Function, leftButtonClicked: Function}) {
    return (
        <Container isContained={true}>
            <Horizontal>
                <Template margin={'1px'}><Card onClick={props.leftButtonClicked} color={'white'} backgroundColor={'orange'} width={'25px'} height={'25px'} borderRadius={'50%'}><LeftOutlined></LeftOutlined></Card></Template>
                <Template margin={'1px'}><Card onClick={props.rightButtonClicked} color={'white'} backgroundColor={'orange'} width={'25px'} height={'25px'} borderRadius={'50%'}><RightOutlined></RightOutlined></Card></Template>
            </Horizontal>
        </Container>
    );
}
