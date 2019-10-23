import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import configureStore from './store/configureStore';

const store = configureStore();

ReactDOM.render(
<Provider store={store}>
    <App />
</Provider>, document.getElementById('root'));
serviceWorker.unregister();
