import React from "react";
import {Button, Form, Rate} from "antd";
import {BaseDVForm} from "../../components/form/BaseDVForm";

export class Main extends BaseDVForm {
    options = ['Apple', 'Orange', 'Banana']
    handleSubmit = () => {
    }
    settings = {
        columns: 1,
        initialValues: {obj: {input: 12}},
        fields: [
            {
                key: 'obj.input',
                label: 'Input',
                required: true,
                initialValue: 'hello',
                tooltip: 'This is the tooltip.',
            },
            {key: 'checkbox', label: 'Checkbox', widget: 'checkbox'},
            {key: 'rating', label: 'Rating', widget: Rate, initialValue: 2},
            {key: 'switch', label: 'Switch', widget: 'switch', initialValue: true},
            {
                key: 'select', label: 'Select', widget: 'select', options: this.options,
            },
            {
                key: 'checkbox-group',
                label: 'Checkbox Group',
                widget: 'checkbox-group',
                options: this.options,
            },
            {
                key: 'radio-group',
                label: 'Radio Group',
                widget: 'radio-group',
                forwardRef: true,
                options: this.options

            },
            {
                key: 'radio-button-group',
                label: 'Radio Button Group',
                widget: 'radio-group',
                buttonGroup: true,
                forwardRef: true,
                options: this.options

            },
            {key: 'password', label: 'Password', widget: 'password'},
            {key: 'textarea', label: 'Textarea', widget: 'textarea'},
            {key: 'number', label: 'Number', widget: 'number'},
            {key: 'date-picker', label: 'Date Picker', widget: 'date-picker'},
        ],
    }
    content = <Form.Item wrapperCol={{span: 16, offset: 8}} className="form-footer">
            <Button htmlType="submit" type="primary">
                Submit
            </Button>
        </Form.Item>;


    render() {
        return (
            super.render()
        )
    }
}

