import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import LandingPage from './Landingpage';
import Navbar from './components/Navbar';
import Footer from './components/pages/Footer/Footer';
import { BrowserRouter } from 'react-router-dom'

// ReactDOM.render(<App />, document.getElementById('root'));

// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import LandingPage from './Landingpage';
// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Navbar/>
    <App />
    <Footer />
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();