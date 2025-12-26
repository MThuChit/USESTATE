import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
 
function App() {
  const [counter, setCounter] = useState(0)
  const [itemName, setItemName] = useState('')
  const [hobbies,setHobbies] = useState([])
  function onIncreaseCounterClick(){
    //setCounter(counter+1) //only run once per render
    //setCounter(counter+1) //only run once per render
    setCounter((prev)=>{
     return prev+1;
    })
    // setCounter((prev)=>{
    //  return prev+1;
    // })    need to use prev if want use twice
  }
  function onChangeItemName(event){
    setItemName(event.target.value)
  }
  function onCheckboxClick(event){
 
  }
 
  return (
    <>
      <p>Counter: {counter}</p>
      <p><input type="text" name="itemName" id="itemName" value={itemName} onChange={onChangeItemName}/></p>
      <p><input type="checkbox" name="hobby" id="ck_music" value="music" onChange={onCheckboxClick}/>Music</p>
      <p><input type="checkbox" name="hobby" id="ck_movie" value="movie" onChange={onCheckboxClick}/>Music</p>
      <p>
        <button onClick={onIncreaseCounterClick}>Click</button>
      </p>
      <hr />
      <p>Item Name: {itemName}</p>
    </>
  )
}
 
export default App
