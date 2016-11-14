import {createStore, applyMiddleware, combineReducers, compose} from 'redux'

import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'

const loggerMiddleware = createLogger({ predicate: (getState, action) => __DEV__  });


import appReducers from './modules/app/reducers'

console.log({appReducers})

const reducer = combineReducers({
    app: appReducers
});

const midleware = compose(applyMiddleware(thunkMiddleware));

const store = createStore(reducer,{}, midleware);
export default store;