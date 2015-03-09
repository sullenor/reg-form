'use strict';

import FormField from 'react-components/components/FormField/FormField';
import React from 'react';
import Reflux from 'reflux';

export default class Form extends React.Component {
    render() {
        let errors = this.props.errors || {};
        let fields = this.props.fields;
        let fieldViews = Object.keys(fields || {}).map(fieldName => {
            let field = fields[fieldName];
            return (<FormField
                key={field.name}
                actionChanged={field.action}
                label={field.name}
                error={errors[field.name]}
                name={field.name}
                options={field.options}
                type={field.type} />);
        });

        return (
            <form action='' method={this.props.method || 'POST'}>
                {fieldViews}
            </form>
        );
    }
}
