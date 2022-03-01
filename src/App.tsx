import React from 'react';
import './App.css';
import {Container} from "./framework/components/structural_components/Container";
import {Vertical} from "./framework/components/structural_components/Vertical";
import {Component} from "./framework/components/structural_components/Component";
import {Header} from "./application/components/Header";
import {Horizontal} from "./framework/components/structural_components/Horizontal";
import {SideBar} from "./application/components/SideBar";
import {Template} from "./framework/components/structural_components/Template";
import "antd/dist/antd.css";
import {Empty} from "./framework/components/structural_components/Empty";
import {Text} from "./framework/components/text/Text";
import {Slider} from "./application/components/Slider";




function App() {

    return (
        <Container backgroundColor={'lightgray'}>
            <Vertical>
                <Component flex={2} component={Header}/>
                <Horizontal flex={10}>
                    <Component flex={1} component={SideBar}/>
                    <Component flex={5} component={Slider}/>
                    <Component flex={1} component={SideBar}/>
                </Horizontal>
                <Template flex={1}><Text text={'sadra'} color={'blue'} fontSize={'20px'} fontWeight={900}/></Template>
            </Vertical>
        </Container>
    );
}

export default App;
