import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './styles/styles.css'
import './styles/landing.css'
import './styles/mainsearchbar.css'
import './styles/categories.css'
import './styles/navbar.css'
import './styles/smallsearchbar.css'
import './styles/header.css'
import './styles/movies.css'
import './styles/movieinfo.css'
import './styles/videoplayer.css'
import './styles/footer.css'
import './styles/notfound.css'
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App className="general"/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
