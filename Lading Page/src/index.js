import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Nav from './Section 1/Nav';
import Banner from './Section 1/Banner';
import Section2 from './Section 2'
import Section3 from './Section 3';
import Section4 from './Section 4';
import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Nav />
    <Banner />
    <Section2/>
    <Section3/>
    <Section4/>
    <Section2/>
    <Section2/>
    <Section2/>
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
