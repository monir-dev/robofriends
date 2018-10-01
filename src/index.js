import React from 'react';
import ReactDOM from 'react-dom';

import 'tachyons';
import registerServiceWorker from './registerServiceWorker';
import App from './App';
import './index.css';


// componentDidMount()


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
