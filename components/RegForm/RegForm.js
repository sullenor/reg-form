'use strict';

import Form from '../Form/Form';
import React from 'react';

import regFormActions from '../../actions/regFormActions';
import regFormStore from '../../stores/regFormStore';

export default class RegForm extends React.Component {
    _onStoreChanged() {
        this.setState(regFormStore.getErrors());
    }
    componentDidMount() {
        this._unsubscribe = regFormStore.listen(this._onStoreChanged);
    }
    componentWillUnmount() {
        this._unsubscribe();
    }
    render() {
        var fields = {
            login: {
                action: regFormActions.loginChanged,
                name: 'login',
                type: 'input'
            }
        };

        var errors = this.state.errors;

        return (<Form fields={fields} errors={errors} />);
    }
}
