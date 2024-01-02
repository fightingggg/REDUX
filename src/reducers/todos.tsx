enum Actiontype {
    PLUS_TODO ="PLUS_TODO"
}

interface Action{
    type: Actiontype;
    text : string;
}

const todos = (state=[], action:Action)=>{
    switch (action.type){
        case "PLUS_TODO":
            return [...state, action.text];
        default: return state;
    }
}

export default todos;
