'use strict';

import React from 'react';
import Reflux from 'reflux';

import regFormStore from '../../stores/regFormStore';

export default class Form extends React.Component {
    mixins: [Reflux.listenTo(regFormStore, '_onStoreChanged')],
    _onStoreChanged() {},
    render() {
        // this.props.fields
        // this.state.errors

        return (
            <form action="" method={this.props.method || 'POST'} />
        );
    }
}
