import Reducer = Redux.Reducer;

const { createStore } = Redux;
const INCREMENT: string = 'INCREMENT';
const DECREMENT: string = 'DECREMENT';
const $value = $('<h1></h1>');
const $incrementButton = $('<button>+</button>');
const $decrementButton = $('<button>-</button>');

const counter: Reducer = (state = 0, action?) => {
    switch (action.type) {
        case INCREMENT:
            return state + 1;
        case DECREMENT:
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
        store.dispatch({
            type: INCREMENT
        });
    });

    $decrementButton.on('click', () => {
        store.dispatch({
            type: DECREMENT
        });
    });

    $container.append($value);
    $container.append($incrementButton);
    $container.append($decrementButton);

    render();
});