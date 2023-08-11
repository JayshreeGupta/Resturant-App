import React from 'react';
import "./style.css";

const useState = () => {
    const initialData=5;
   const  [myNum,setMynum] =React.useState(initialData)
    //console.log(myNum);
    return (
    <>
      <div className='center_div'>
        <p>{myNum}</p>
        <div class='button2' onClick={() => setMynum(myNum+1)}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            INCR Me
        </div>
        <div class="button2" onClick={() => myNum > 0 ? setMynum(myNum-1): setMynum(0)
        }>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
         DECR Me
        </div>
      </div>
    </>
  );
};

export default useState
