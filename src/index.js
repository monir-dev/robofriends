import React from 'react';
import ReactDOM from 'react-dom';

import 'tachyons';
import registerServiceWorker from './registerServiceWorker';
import App from './App';


// componentDidMount()


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
