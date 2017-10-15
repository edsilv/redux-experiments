import { ActionTypes } from './ActionTypes';
import { handleActions, Action } from 'redux-actions';
import { IState, Counter } from "./Model";
import { Store, createStore } from 'redux';
import ActionCreators from './ActionCreators';
import rootReducer from './Reducer';

const $value = $('<h1></h1>');
const $incrementButton = $('<button>+</button>');
const $decrementButton = $('<button>-</button>');

const initialState: IState = <Counter>{
    count: 0
};

export default handleActions<IState, Counter>({

    [ActionTypes.INCREMENT]: (state: IState, action: Action<Counter>): IState => {
        return {
            count: state.count + 1,
        };
    },
    [ActionTypes.DECREMENT]: (state: IState, action: Action<Counter>): IState => {
        return {
            count: state.count - 1,
        };
    }

}, initialState);

const render = () => {
    $value.text(store.getState());
};

const store: Store<any> = createStore(rootReducer, initialState);
//const store: Store<any> = createStore(handleActions, initialState);

store.subscribe(render);

$(function() {

    const $container = $('#container');
    
    $incrementButton.on('click', () => {
        store.dispatch(ActionCreators.increment());
    });

    $decrementButton.on('click', () => {
        store.dispatch(ActionCreators.decrement());
    });

    $container.append($value);
    $container.append($incrementButton);
    $container.append($decrementButton);

    render();
});