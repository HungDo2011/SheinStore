import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';

import GlobalStyles from './components/GlobalStyles';
import store from 'redux/store';

ReactDOM.render(
    <Provider store={store}>
        <GlobalStyles>
            <App />
        </GlobalStyles>
    </Provider>,
    document.getElementById('root'),
);
reportWebVitals();
