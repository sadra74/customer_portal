import React from "react";
import {Container} from "../../components/structural_components/Container";
import {Vertical} from "../../components/structural_components/Vertical";
import {Component} from "../../components/structural_components/Component";
import {Template} from "../../components/structural_components/Template";
import {Image} from "antd";
import {Text} from "../../components/text/Text";
import {Horizontal} from "../../components/structural_components/Horizontal";
import {StarFilled} from "@ant-design/icons";
import {Card} from "../../components/card/Card";

export function ImageCard() {
    return (
        <Container border={'1px solid lightgray'} isContained={true}>
            <Template zIndex={1000} position={'relative'} top={'40%'} justifyContent={'flex-start'}>
                <Card backgroundColor={'green'} borderRadius={'0px 5px 5px 0px'} color={'white'} width={'80px'}>sadra</Card>
            </Template>
            <Vertical padding={'5px'}>
                <Template>
                    <Image src={require('../assets/img/a436/d1db/0d0cf631c67f9b159badd90ffeb70446.png')}></Image>
                </Template>
                <Template>
                    <Text textAlign={'left'} fontSize={'20px'} text={'sadra'} fontWeight={900}></Text>
                </Template>
                <Template>
                    <Text textAlign={'left'} text={'aowefkapekofpaefoaekfpoaksepfakepfoakepfaowefkapekofpaefoaekfpoaksepfakepfoakepfokaepofkaepofkoaowefkapekofpaefoaekfpoaksepfakepfoakepfokaepofkaepofkkaepofkaepofk'} fontWeight={100}></Text>
                </Template>
                <Horizontal justifyContent={'flex-start'}>
                    <Template ><StarFilled></StarFilled></Template>
                    <Template margin={'0px 0px 0px 10px'}><Text text={'asd'} fontWeight={900} color={'red'}></Text></Template>
                </Horizontal>
            </Vertical>
        </Container>
    );
}
