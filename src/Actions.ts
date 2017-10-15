export enum TypeKeys {
    INCREMENT = "INCREMENT",
    DECREMENT = "DECREMENT",
    OTHER = "OTHER"
}

export type ActionTypes = 
    | IncrementAction
    | DecrementAction 
    | OtherAction;

export interface IncrementAction {
    type: TypeKeys.INCREMENT;
    by: number;
}

export interface DecrementAction {
    type: TypeKeys.DECREMENT;
    by: number;
}

export interface OtherAction {
    type: TypeKeys.OTHER;
    by: null;
}