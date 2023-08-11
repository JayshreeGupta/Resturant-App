import React,{UseReducer} from 'react';
import "./style.css";

const reducer = (state,action) => {
    if(action.type === "INCR"){
        state=state+1;
    }
    if(state >0 && action.type === "DECR"){
        state=state-1;
    }
    return state;
};

const useReducer = () => {
    const initialData=5;
  // const  [myNum, setMynum] =React.useState(initialData)
    //console.log(myNum);
    const [state, dispatch]=useReducer();
    
     return (
    <>
      <div className='center_div'>
        <p>{state}</p>
        <div class='button2' onClick={() => dispatch({type:"INCR"})}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            INCR  
        </div>
        <div class="button2" onClick={() => dispatch({type:"DECR"})}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
         DECR
        </div>
      </div>
    </>
  );
};

export default UseReducer;
