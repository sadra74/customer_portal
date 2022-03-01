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
import {Footer} from "./application/components/Footer";
import {Empty} from "./framework/components/structural_components/Empty";
import {Text} from "./framework/components/text/Text";
import {ImageCard} from "./application/components/ImageCard";
import {useRef} from "react";



function App() {

    return (
        <Container>
            <Vertical>
                <Component flex={2} component={Header}/>
                <Horizontal flex={6}>
                    <Component flex={1} component={SideBar}/>
                    <Horizontal flex={3} overflowX={'auto'} overflowY={'hidden'} justifyContent={'flex-start'}>
                        {[1, 1, 1, 1, 1, 1, 1].map(() => {
                            return <Component maxWidth={"200px"} minWidth={"200px"} flex={1} margin={'5px'}
                                              component={ImageCard}/>
                        })}
                    </Horizontal>
                    <Component flex={1} component={SideBar}/>
                </Horizontal>
                <Empty flex={5}/>
                <Template flex={1}><Text text={'sadra'} color={'blue'} fontSize={'20px'} fontWeight={900}/></Template>
            </Vertical>
        </Container>
    );
}

export default App;
