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

function getCities(country) {
    switch (country) {
    case 'ru':
        return [
            {
                label: 'Moscow',
                value: 'moscow'
            },
            {
                label: 'Spb',
                value: 'spb'
            }
        ];

    case 'us':
        return [
            {
                label: 'NY',
                value: 'ny'
            },
            {
                label: 'Washington',
                value: 'wa'
            }
        ];
    }
}

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

    getOptions() {
        return {
            country: [
                {label: 'Great Britain', value: 'gb'},
                {label: 'Russia', value: 'ru'},
                {label: 'USA', value: 'us'}
            ],
            city: getCities(fields.country.value)
        };
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

    onCountryChanged(value) {
        fields.country.value = value;

        // validation goes here

        this.trigger(fields);
    }
});
