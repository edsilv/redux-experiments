import { incrementCounter, decrementCounter } from './ActionCreators';
import { State } from "./State";
import { Store, createStore } from 'redux';
import { counterReducer } from './Reducer';

const $value = $('<h1></h1>');
const $incrementButton = $('<button>+</button>');
const $decrementButton = $('<button>-</button>');

const initialState: State = <State>{
    count: 0
};

const render = () => {
    $value.text(store.getState().count);
};

const store: Store<State> = createStore(counterReducer, initialState);

store.subscribe(render);

$(function() {

    const $app = $('#app');
    
    $incrementButton.on('click', () => {
        store.dispatch(incrementCounter(1));
    });

    $decrementButton.on('click', () => {
        store.dispatch(decrementCounter(1));
    });

    $app.append($value);
    $app.append($incrementButton);
    $app.append($decrementButton);

    render();
});