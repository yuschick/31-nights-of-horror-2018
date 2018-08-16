import React from 'react';
import ReactDOM from 'react-dom';
import Calendar from './containers/Calendar/';
import registerServiceWorker from './registerServiceWorker';

import './styles/reset.css';

ReactDOM.render(<Calendar />, document.getElementById('root'));
registerServiceWorker();
