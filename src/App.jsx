import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './Counter'
import Users from './Users'

function App() {

  function handleClick(){
     alert('button clicked')
  }
  const handleClick2 =()=>{
    alert('clicked')
  }
  const addToFive=(num)=>{
    alert(num+5)
  }
  return (
    <>
    <Users></Users>
    <Counter></Counter>
      <h1>Vite + React</h1>
      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClick2}>Click Here</button>
      <button onClick={()=>alert('clicked')}>Click</button>
      <button onClick={()=>addToFive(3)}>Add</button>
    </>
  )
}

export default App
