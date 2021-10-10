import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import './fonts/optima-cufonfonts-webfont/Optima Medium.woff';
import './fonts/optima-cufonfonts-webfont/OPTIMA_B.woff';
import './fonts/optima-cufonfonts-webfont/OPTIMA.woff';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
