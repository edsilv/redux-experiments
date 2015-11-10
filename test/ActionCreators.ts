import * as actionTypes from './ActionTypes';

export function increment() {
    return {
        type: actionTypes.INCREMENT
    }
}

export function decrement() {
    return {
        type: actionTypes.DECREMENT
    }
}