import styled from "styled-components";
import {CardParams} from "../components/card/Card";
import {TextParams} from "../components/text/Text";
import {FlexDivParams} from "../components/structural_components/DirectedStructure";
import {TemplateParams} from "../components/structural_components/Template";
import {ComponentParams} from "../components/structural_components/Component";
import {ContainerParams} from "../components/structural_components/Container";


export const FlexItemDiv = styled.div<FlexDivParams>`
  flex: ${(props: FlexDivParams) => props.flex};
  display: flex;
  justify-content: ${(props: FlexDivParams) => props.justifyContent ? props.justifyContent : 'center'};
  align-items: ${(props: FlexDivParams) => props.alignItems ? props.alignItems : 'center'};
  border: ${(props: FlexDivParams) => props.border ? props.border : 'none'};
  margin: ${(props: FlexDivParams) => props.margin ? props.margin : '0px'};
  padding: ${(props: FlexDivParams) => props.padding ? props.padding : '0px'};
  overflow-x: ${(props: FlexDivParams) => props.overflowX ? props.overflowX : 'hidden'};
  overflow-y: ${(props: FlexDivParams) => props.overflowY ? props.overflowY : 'hidden'};
  min-width: ${(props: FlexDivParams) => props.minWidth ? props.minWidth : '0px'};
  max-width: ${(props: ComponentParams) => props.maxWidth ? props.maxWidth : 'unset'};
`;
export const ComponentDiv = styled.div<ComponentParams>`
  position: ${(props: ComponentParams) => props.position};
  width: ${(props: ComponentParams) => props.position ? "auto" : "100%"};
  height: ${(props: ComponentParams) => props.position ? "auto" : "100%"};
  display: flex;
  justify-content: ${(props: ComponentParams) => props.justifyContent ? props.justifyContent : 'center'};
  align-items: ${(props: ComponentParams) => props.alignItems ? props.alignItems : 'center'};
  min-width: ${(props: ComponentParams) => props.minWidth ? props.minWidth : '0px'};
  max-width: ${(props: ComponentParams) => props.maxWidth ? props.maxWidth : 'unset'};
  width: ${(props: ComponentParams) => props.width ? props.width : 'unset'};
  min-height: ${(props: ComponentParams) => props.minHeight ? props.minHeight : '0px'};
`;
export const TemplateDiv = styled.div<TemplateParams>`
  position: ${(props: TemplateParams) => props.position};
  width: ${(props: TemplateParams) => props.position ? "auto" : "100%"};
  height: ${(props: TemplateParams) => props.position ? "auto" : "100%"};
  display: flex;
  justify-content: ${(props: TemplateParams) => props.justifyContent ? props.justifyContent : 'center'};
  align-items: ${(props: TemplateParams) => props.alignItems ? props.alignItems : 'center'};
  top: ${(props: TemplateParams) => props.top ? props.top : 'auto'};
  left: ${(props: TemplateParams) => props.left ? props.left : 'auto'};
  right: ${(props: TemplateParams) => props.right ? props.right : 'auto'};
  bottom: ${(props: TemplateParams) => props.bottom ? props.bottom : 'auto'};
  z-index: ${(props: TemplateParams) => props.zIndex ? props.zIndex : 'auto'};
  `;

////////////////////////////////////////////////////////////////////////////////////////////

export const TextSpan = styled.div`
  color: ${(props: TextParams) => props.color};
  font-size: ${(props: TextParams) => props.fontSize};
  font-family: ${(props: TextParams) => props.fontFamily};
  font-weight: ${(props: TextParams) => props.fontWeight};
  width:  100%;
  height: 100%;
  word-wrap: break-word;
  text-align: ${(props: TextParams) => props.textAlign ? props.textAlign : 'center'};
`;
export const EmptyDiv = styled.div`
  width:  100%;
  height: 100%;
`;
export const CardDiv = styled.div`
  color: ${(props: CardParams) => props.color};
  border: ${(props: CardParams) => props.border};
  border-radius: ${(props: CardParams) => props.borderRadius};
  width: ${(props: CardParams) => props.width};
  height: ${(props: CardParams) => props.height};
  font-size: ${(props: CardParams) => props.fontSize};
  background-color: ${(props: CardParams) => props.backgroundColor};
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const ContainerDiv = styled.div`
  border: ${(props: ContainerParams) => props.border ? props.border : 'none'};
  margin: ${(props: ContainerParams) => props.margin ? props.margin : '0px'};
  padding: ${(props: ContainerParams) => props.padding ? props.padding : '0px'};
  min-width: ${(props: ContainerParams) => props.minWidth ? props.minWidth : '0px'};
`;
