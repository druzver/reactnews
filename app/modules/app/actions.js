import * as types from './constants'

export function doSometing() {
    console.log('doSometing');
    return {
        type: types.ACTION_SOME_ACTION,
        payload: {
            aaa: 'aaa'
        }
    }
}