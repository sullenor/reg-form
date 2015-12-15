'use strict';

import FormField from 'react-components/components/FormField/FormField';
import Form from '../Form/Form';
import React from 'react';

import regFormActions from '../../actions/regFormActions';
import regFormStore from '../../stores/regFormStore';

export default class RegForm extends React.Component {
    _onStoreChanged() {
        this.setState({
            errors: regFormStore.getErrors(),
            options: regFormStore.getOptions()
        });
    }
    constructor() {
        this.state = {
            errors: regFormStore.getErrors(),
            options: regFormStore.getOptions()
        };
    }
    componentDidMount() {
        this._unsubscribe = regFormStore.listen(this._onStoreChanged.bind(this));
    }
    componentWillUnmount() {
        this._unsubscribe();
    }
    render() {
        let errors = this.state.errors;
        let cities = this.state.options.city;
        let countries = this.state.options.country;

        return (
            <Form>
                <FormField key='login' label='Login' name='login' error={errors.login}
                    type='Input' actionChanged={regFormActions.loginChanged} />
                <FormField key='country' label='Country' name='country' error={errors.country}
                    type='Select' options={countries} actionChanged={regFormActions.countryChanged} />
                <FormField key='city' label='City' name='city' error={errors.city}
                    type='Select' options={cities} actionChanged={regFormActions.cityChanged} />
            </Form>
        );
    }
}
