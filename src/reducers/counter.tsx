
const counter = (state=0,action:{type:string})=>{
    switch (action.type){
        case "increment":
            return state +1;
        case "decrement":
            return state -1;
        default:
            return state;
       
    }
}

export default counter;