import * as types from './constants'
import createReducer from './../../lib/createReducer'


const initialState = {
    initialized: false
};

let counter = 1;

function reduceSomeAction(state={}, action) {
    const text = `counts = ${counter++}`
    return {...state, text}
}

export default createReducer( {}, {
    [types.ACTION_SOME_ACTION]: reduceSomeAction
});