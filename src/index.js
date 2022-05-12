import React from 'react';
import ReactDOM from 'react-dom/client';
//import { Provider } from 'react-redux';
import App from './components';
//import { store } from './store';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
{/*       <Provider store = {store}> */}
            <App type="anime" />
            {/*         <App type="manga" />
        <App type="people" /> */}
{/*       </Provider> */}
  </React.StrictMode>
);

