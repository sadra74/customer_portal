import React, {Component} from "react";
import {Form} from "antd";
import FormBuilder from "./FormBuilder";
import './defineAntdWidgets'


export interface IDVFormProps {
    handleSubmit: Function;
    settings?: any;
    content?: any;
}

export class DVForm extends Component<IDVFormProps, IDVFormProps> {
    formRef: any = React.createRef()
    handleFinish = () => {
        this.state.handleSubmit(this.formRef.current.getFieldsValue())
    }
    getSettings = () => {
        return this.state.settings
    }
    constructor(props: IDVFormProps) {
        super(props);
        this.state = {settings: props.settings, content: props.content, handleSubmit: props.handleSubmit}
    }

    render() {
        return (
            <Form
                ref={this.formRef}
                layout="horizontal"
                onFinish={this.handleFinish}
                onValuesChange={() => this.forceUpdate()}
            >
                <FormBuilder meta={this.getSettings()} form={this.formRef}/>
                {this.state.content}
            </Form>
        )
    }


}
