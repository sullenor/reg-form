'use strict';

import Input from 'react-components/components/Input/Input';
import React from 'react';
import Reflux from 'reflux';

export default class Form extends React.Component {
    render() {
        var errors = this.props.errors || {};

        var fields = (this.props.fields || []).map(field => {
            switch ((field.type || '').toLowerCase()) {
            case 'input':
                console.log(errors[field.name]);
                return (<Input key={field.name} error={errors[field.name]} />);
            }
        });

        return (
            <form action="" method={this.props.method || 'POST'}>
                {fields}
            </form>
        );
    }
}
