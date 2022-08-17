import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';

//import { Provider } from 'react-redux';
import { App } from './components';

//import { store } from './store';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
/*     <Provider store = {store}> */
    <Router>
        <App />
    </Router>
/*     </Provider> */
);

