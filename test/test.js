var createStore = Redux.createStore;
var INCREMENT = 'INCREMENT';
var DECREMENT = 'DECREMENT';
var $value = $('<h1></h1>');
var $incrementButton = $('<button>+</button>');
var $decrementButton = $('<button>-</button>');
var counter = function (state, action) {
    if (state === void 0) { state = 0; }
    switch (action.type) {
        case INCREMENT:
            return state + 1;
        case DECREMENT:
            return state - 1;
        default:
            return state;
    }
};
var store = createStore(counter);
var render = function () {
    $value.text(store.getState());
};
store.subscribe(render);
$(function () {
    var $container = $('#container');
    $incrementButton.on('click', function () {
        store.dispatch({
            type: INCREMENT
        });
    });
    $decrementButton.on('click', function () {
        store.dispatch({
            type: DECREMENT
        });
    });
    $container.append($value);
    $container.append($incrementButton);
    $container.append($decrementButton);
    render();
});
