'use strict';

import Reflux from 'reflux';
import regFormActions from '../actions/regFormActions';

let fields = [
        'login', 'email',
        'dateOfBirth', 'country', 'city'
    ].reduce((result, fieldName) => {
        result[fieldName] = {value: '', error: null};
        return result;
    }, {});

export default Reflux.createStore({
    listenables: [regFormActions],

    getInitialState() {
        return fields;
    },

    getErrors() {
        return Object.keys(fields).reduce((result, fieldName) => {
            let error = fields[fieldName].error;

            if (error !== null && error !== undefined) {
                result[fieldName] = fields[fieldName].error;
            }

            return result;
        }, {});
    },

    onLoginChanged(value) {
        let login = fields.login;

        login.value = value;

        // validation goes here
        if (value === '') {
            login.error = 'Required field';
        } else {
            login.error = null;
        }

        this.trigger(fields);
    },

    onEmailChanged(value) {
        fields.email.value = value;

        // validation goes here

        this.trigger(fields);
    }
});
