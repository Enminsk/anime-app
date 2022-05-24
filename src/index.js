import React from 'react';
import ReactDOM from 'react-dom/client';
import { Router } from 'react-router';
//import { Provider } from 'react-redux';
import App from './components';
import { Search } from './components';
//import { store } from './store';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
/*     <Provider store = {store}> */
    <Router>
        <Search />
        <App type="anime" />
        <App type="manga" />
    </Router>
/*     </Provider> */
);

