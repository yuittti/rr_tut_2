import React from 'react';
import PropTypes from 'prop-types';
import App from '../App/App';
import store from '../../store';
import { Provider } from 'react-redux';

const Root = () => {
    return (
        <Provider store = {store} >
            <App />
        </Provider>
    )
}

export default Root;