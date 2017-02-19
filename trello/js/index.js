require('babel-polyfill');

import React from 'react';
import ReactDOM  from 'react-dom';

//import PersonList from './components/person-list';
import Board from './components/board';

/*
document.addEventListener('DOMContentLoaded', () =>
    ReactDOM.render(<PersonList />, document.getElementById('app'))
);
*/
document.addEventListener('DOMContentLoaded', () =>
    ReactDOM.render(<Board />, document.getElementById('app'))
);