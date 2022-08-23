import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


const myName = 'Alexander';
ReactDOM.render (
 <React.StrictMode>
  <App name={myName} />
  </React.StrictMode>,
 document.getElementById("root") 
);
