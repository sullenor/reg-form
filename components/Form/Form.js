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

            switch ((field.type || '').toLowerCase()) {
            case 'input':
                return (<FormField
                    key={field.name}
                    actionChanged={field.action}
                    error={errors[field.name]} />);
            }
        });

        return (
            <form action="" method={this.props.method || 'POST'}>
                {fieldViews}
            </form>
        );
    }
}
