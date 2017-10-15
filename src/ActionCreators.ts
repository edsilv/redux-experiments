import { ActionTypes } from './ActionTypes';
//import { createAction } from 'redux-actions';

export default class ActionCreators {

    public static increment() {
        return {
            type: ActionTypes.INCREMENT
        }
    }

    public static decrement() {
        return {
            type: ActionTypes.DECREMENT
        }
    }

    // public static increment() {
    //     return createAction<Counter, Counter>(
    //         ActionTypes.INCREMENT,
    //         (counter: Counter) => counter
    //     );
    // }

    // public static decrement() {
    //     return createAction<Counter, Counter>(
    //         ActionTypes.DECREMENT,
    //         (counter: Counter) => counter
    //     );
    // }
}