import React from "react";
import {Card} from "../../components/card/Card";
import {Template} from "../../components/structural_components/Template";
import {StarOutlined} from "@ant-design/icons";


export function Footer() {
    return (
        <Card icon={<StarOutlined />} color={'white'} border={'none'} width={'200px'} height={'200px'} borderRadius={'100px'} fontSize={'20px'} backgroundColor={'blue'}>
            <Template>sadra</Template>
        </Card>
    );
}
