'use strict';

import RegForm from './components/Form/Form';
import React from 'react';

var fields = [
    {type: 'Input'}
];

React.render(<RegForm fields={fields} />, document.body);
