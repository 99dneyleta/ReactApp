import React from 'react';
import ReactDOM from 'react-dom';
// import 'react-bootstrap/dist/css/bootstrap.css'
// import './styles/bootstrap-3.3.6-dist/css/bootstrap.css'
import './styles/font-awesome-4.5.0/css/font-awesome.css'
import './styles/slider.css'
import './styles/mystyle.css'
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <App />, 
  document.getElementById('root')
);
registerServiceWorker();
