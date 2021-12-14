import React from 'react';
import './App.css';

function App() {
   const getRandomInt = (max: number = 1000 , from: number = 0) => {
    return Math.floor(Math.random() * max) + from;
  }


  const initStack = () => {
     const dataStack: number[] = [];

      return () =>{
          dataStack.push(getRandomInt(100,0));
       return (
          <div className="wrapper-stack">
            {dataStack.map(item => <div className="item-stack">{item}</div>)}
          </div> )
       }
  }


    const getStack =  (): any => {
        const sizeStack = getRandomInt(8,3);
        const stack = initStack();
        const stacks  = [];

        for(let i = 0; i < sizeStack; i++){
            stacks.push(stack());
        }
         return stacks;
   }


    return (
    <div className="App">
        {getStack()}
    </div>
  );
}

export default App;
