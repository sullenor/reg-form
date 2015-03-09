'use strict';

import {join} from 'path';

import Input from 'react-components/components/Input/Input';
import React from 'react';
import Reflux from 'reflux';

import regFormStore from '../../stores/regFormStore';


export default class Form extends React.Component {
    _onStoreChanged() {}
    componentDidMount() {
        this._unsubscribe = regFormStore.listen(this._onStoreChanged);
    }
    componentWillUnmount() {
        this._unsubscribe();
    }
    render() {
        // this.props.fields
        // this.state.errors

        var fields = (this.props.fields || []).map(field => {
            return (<Input value={field.val} />);
        });

        return (
            <form action="" method={this.props.method || 'POST'}>
                {fields}
            </form>
        );
    }
}
