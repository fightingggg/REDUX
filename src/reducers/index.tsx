import {combineReducers} from 'redux';
import counter from "./counter";
import todos from "./todos";

const rootReducer = combineReducers({
    counter,
    todos
})

export default rootReducer;






























// const counter = (state=0,action:{type:string})=>{
//     switch (action.type){
//         case "INCREMENT":
//             return state +1;
//         case "DECREMENT":
//             return state -1;
//         default:
//             break;
//        
//     }
// }

// export default counter;

