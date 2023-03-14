import {legacy_createStore as createStore } from 'redux'
import reducer from './reduces/index'


export default function configureStore(initialState) {
    return createStore(reducer, initialState)
};