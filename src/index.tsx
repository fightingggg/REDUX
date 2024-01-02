import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createStore} from 'redux'
import counter from './reducers';
import rootReducer from './reducers';
import {Provider, useSelector} from 'react-redux';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const store = createStore(rootReducer);

store.dispatch({
  type: "PLUS_TODO",
  text: "USE REDUX"
})

console.log('store.dispatch',store.getState())



const render = () => root.render(
  <React.StrictMode>
    <Provider store={store}>
    <App value={store.getState()}
      onIncrement={()=>store.dispatch({type: "increment"})}
      onDecrement={()=>store.dispatch({type: "decrement"})}
    />
    </Provider>
  </React.StrictMode>
);

render();

store.subscribe(render);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals


reportWebVitals();

// //Provider 둘러싸인 컴포넌트가 store 접근
// -useSelector : Hook 스토어에서 값을 가져올 수 있음
// const counter = useSelector((state)=>state.counter)


// -useDispatch : Hook 스토어 내부 dispath 함수에 접근 가능하게 함. 
