'use strict';

import React from 'react';
import Reflux from 'reflux';

export default class Form extends React.Component {
    render() {
        return (
            <form action={this.props.action || ''} method={this.props.method || 'POST'}>
                {this.props.children}
            </form>
        );
    }
}
