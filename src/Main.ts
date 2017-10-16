import { incrementCounter, decrementCounter } from './ActionCreators';
import { State } from "./State";
import { Store, createStore } from 'redux';
import { counterReducer } from './Reducer';

const initialState: State = <State>{
    count: 0
};

let value: HTMLHeadingElement;

const render = () => {
    value.innerText = store.getState().count.toString();
};

const store: Store<State> = createStore(counterReducer, initialState);

store.subscribe(render);

window.addEventListener('DOMContentLoaded', () => {
    
    const app = document.querySelector('#app');
    value = document.createElement('h1');
    app.appendChild(value);

    const incrementButton = document.createElement('button');
    incrementButton.textContent = "+";
    incrementButton.onclick = () => {
        store.dispatch(incrementCounter(1));
    }
    app.appendChild(incrementButton);

    const decrementButton = document.createElement('button');
    decrementButton.textContent = "-";
    decrementButton.onclick = () => {
        store.dispatch(decrementCounter(1));
    }
    app.appendChild(decrementButton);

    render();
});