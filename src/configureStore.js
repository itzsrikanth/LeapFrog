import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import allReducers from './reducers';

export default (function () {
    var store;
    return function () {
        if (!store) {
            store = createStore(
                allReducers,
                applyMiddleware(thunk)
            );
        }
        return store;
    };
})();
