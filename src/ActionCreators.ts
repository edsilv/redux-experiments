import { TypeKeys, IncrementAction, DecrementAction } from './Actions';

export const incrementCounter = (by: number): IncrementAction => ({
    type: TypeKeys.INCREMENT,
    by
});

export const decrementCounter = (by: number): DecrementAction => ({
    type: TypeKeys.DECREMENT,
    by
});