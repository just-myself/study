import React from 'react';
import ReactDOM from 'react-dom';

import RouteMap from "./router/demo1/one.js";
import './index.css';
import App from './App';
import Alls from "./all1.js";
import registerServiceWorker from './registerServiceWorker';





ReactDOM.render(<RouteMap/>, document.getElementById('root'));
registerServiceWorker();
