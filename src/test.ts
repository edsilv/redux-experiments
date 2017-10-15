import { Reducer, createStore } from 'redux';
import { default as actionTypes } from './ActionTypes';
import { default as actionCreators } from './ActionCreators';

const $value = $('<h1></h1>');
const $incrementButton = $('<button>+</button>');
const $decrementButton = $('<button>-</button>');

const counter: Reducer = (state = 0, action?) => {
    switch (action.type) {
        case actionTypes.INCREMENT:
            return state + 1;
        case actionTypes.DECREMENT:
            return state - 1;
        default:
            return state;
    }
};

const store = createStore(counter);

const render = () => {
    $value.text(store.getState());
};

store.subscribe(render);

$(() => {

    const $container = $('#container');

    $incrementButton.on('click', () => {
        store.dispatch(actionCreators.increment());
    });

    $decrementButton.on('click', () => {
        store.dispatch(actionCreators.decrement());
    });

    $container.append($value);
    $container.append($incrementButton);
    $container.append($decrementButton);

    render();
});