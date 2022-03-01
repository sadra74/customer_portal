import React, {Component} from "react";
import {DVForm, IDVFormProps} from "./DVForm";

export class BaseDVForm extends Component implements IDVFormProps{



    render() {
        return (
            <DVForm settings={this.settings} content={this.content} handleSubmit={this.handleSubmit}/>
        )
    }

    content: any;

    handleSubmit() {
    }

    settings: any;
}

