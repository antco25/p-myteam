import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './components/App/App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, useLocation } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter basename='/p-myteam'>
      <ScrollToTop />
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
