import React from 'react';
import ReactDOM from 'react-dom';
// import 'react-bootstrap/dist/css/bootstrap.css'
// import './styles/bootstrap-3.3.6-dist/css/bootstrap.css'
import './styles/font-awesome-4.5.0/css/font-awesome.css'
import './styles/slider.css'
import './styles/mystyle.css'
import './index.css';
import App from './App';
import Header from "./components/Header/Header";
import registerServiceWorker from './registerServiceWorker';
import Footer from './components/Footer';

ReactDOM.render(
  <div className="allcontain">
    <Header/>
    <App />
    <Footer />
  </div>, 
  document.getElementById('root')
);
registerServiceWorker();
