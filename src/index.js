import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { store } from './redux/store'
import { storeS } from './redux/reduxStore'

const root = ReactDOM.createRoot(document.getElementById('root'));
export const renderEntireTree = (store) => {
    console.log('store in renderEntireTree: ', store)
    root.render(
        <React.StrictMode>
            <App store={store} />
        </React.StrictMode>
    );

    reportWebVitals();

}
renderEntireTree(storeS.getState())
storeS.subscribe(() => {
    let state = storeS.getState()
    renderEntireTree(state)
})