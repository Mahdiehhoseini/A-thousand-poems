import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter , Route, Routes} from 'react-router-dom';
import App from './App';
import Fals from './components/Fal';
import Ashaars from './components/Ashaar';
import Homes from './components/home';
import Shers from './components/Sher';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <Routes>
        <Route path="/" element={<App/>}/>
        <Route path="/fal" element={<Fals/>}/>
        <Route path="/ashaar" element={<Ashaars/>}/>
        <Route path="/sher" element={<Shers/>}/>
        <Route path="/home" element={<Homes/>}/>
      </Routes>
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
