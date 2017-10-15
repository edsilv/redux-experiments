import { TypeKeys, ActionTypes } from './Actions';
import { State } from "./State";

type Reducer = (s: State, action: ActionTypes) => State;

export const counterReducer: Reducer = (s: State, action: ActionTypes) => {
    switch (action.type) {
        case TypeKeys.INCREMENT:
            return { count: s.count + action.by };
        case TypeKeys.DECREMENT:
            return { count: s.count - action.by };
        default:
            return s;
    }
}