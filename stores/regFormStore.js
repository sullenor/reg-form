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

    onLoginChanged(value) {
        fields.login.value = value;

        // validation goes here

        this.trigger(fields);
    },

    onEmailChanged(value) {
        fields.email.value = value;

        // validation goes here

        this.trigger(fields);
    }
});
