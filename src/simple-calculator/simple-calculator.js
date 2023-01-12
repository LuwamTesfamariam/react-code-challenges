import { useReducer } from "react"

const initialState = {
    num1: 0,
    num2: 0,
    result: 'no result yet'
}

const reducer = (state, action) => { 
    if(action.type === 'setNum1'){
        return {...state, num1: action.number};
    }

    if(action.type === 'setNum2'){
        return {...state, num2: action.number};
    }

    if(action.type === 'add'){
        return {...state, result: state.num1+state.num2};
    }
    if(action.type === 'subtract'){
        return {...state, result: state.num1-state.num2};
    }
    if(action.type === 'clear'){
        return initialState; // {num1: initialState.num1, num2:initialState.num2, result: initialState.result}
    }
}

const SimpleCalculator = () => {

    const [state, dispatch] = useReducer(reducer, initialState);


    const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

    return (
        <div>
            <div>
                <h2>Number 1</h2>
                {numbers.map(number => (
                    <button key={number} onClick={() => dispatch({type: 'setNum1', number})}>
                        {number}
                    </button>))}
            </div>
            <div>
                <h2>Number 2</h2>
                {numbers.map(number => (
                    <button key={number} onClick={() => dispatch({type: 'setNum2', number})}>
                        {number}
                    </button>))}
            </div>
            <div>
                <h2>Actions</h2>
                <button onClick={() => dispatch({type: 'add'})}>+</button>
                <button onClick={() => dispatch({type: 'subtract'})}>-</button>
                <button onClick={() => dispatch({type: 'clear'})}>c</button>
            </div>
            <div><h2>Result: {state.result}</h2></div>
        </div>
    )
}

export default SimpleCalculator;