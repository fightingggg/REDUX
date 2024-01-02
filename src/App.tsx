
import { useState } from 'react';
import './App.css';
import { useSelector } from 'react-redux';

type Props ={
  value : any;
  onIncrement : () => void; 
  onDecrement : () => void;
}

function App({value,onIncrement,onDecrement} : Props) {
  const counter = useSelector((state)=> state.counter);
  const [todovalue, setTodoValue] = useState("");
  const handleChange =(e: React.ChangeEvent<HTMLInputElement>) =>{
    setTodoValue(e.target.value);
  }
  
  const addTodo = (e: React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    setTodoValue("");
  }
  return (
    <div className="App">
      <p>Click here: {value.counter} times</p>
      <button onClick={onIncrement}>
        +
      </button>
      <button onClick={onDecrement}>
        -
      </button>

    <form onSubmit={addTodo}>
      <input type="text" value={todovalue} onChange={handleChange}/>
      <input type="submit"/>
    </form>
      
    </div>
  );
}

export default App;


// import React, { useState } from 'react';
// import './App.css';

// function App() {
//   const [count, setCount] = useState(0);

//   const increment = () => {
//     setCount(count + 1);
//   };

//   const decrement = () => {
//     setCount(count - 1);
//   };

//   return (
//     <div className="App">
//       <p>Click here: {count} times</p>
//       <button onClick={increment}>
//         +
//       </button>
//       <button onClick={decrement}>
//         -
//       </button>
//     </div>
//   );
// }

// export default App;
