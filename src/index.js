import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { store } from './redux/store'

const root = ReactDOM.createRoot(document.getElementById('root'));
export const renderEntireTree = (state) => {
    root.render(
        <React.StrictMode>
            <App store={state} dispatch={store.dispatch.bind(store)}/>
        </React.StrictMode>
    );

    reportWebVitals();

}
renderEntireTree(store.getState())
store.subscribe(() => {
    renderEntireTree(store.getState())
})