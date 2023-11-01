import React,{Suspense} from 'react';
import ReactDOM from 'react-dom/client';

import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import Preloader from './components/Preloader/Preloader';
import { AppRouter } from './routers';
import { store } from "./redux/store/store";
// styles
import "./styles/styles.scss";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Suspense fallback={<Preloader />}>
    <Provider store={store}>
    <Router>
      
        <AppRouter></AppRouter>

    </Router>    </Provider>
    </Suspense>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
