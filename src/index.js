import React,{Suspense} from 'react';
import ReactDOM from 'react-dom/client';

import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
// preloader
import Preloader from './components/Preloader/Preloader';
// routing
import { AppRouter } from './routers';
// redux
import { store } from "./redux/store/store";
// toast
import 'react-toastify/dist/ReactToastify.css';
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
