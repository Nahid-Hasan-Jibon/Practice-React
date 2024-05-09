

import './App.css'
import Counter from './Countar'
import Friends from './Friends'
import Team from './Team'
import Users from './Users'

function App() {
  function handleClick(){
    alert('btn clicked')
  }

  const handleClicked2=()=>{
    alert('2nd btn clicked')
  }

  const addToFive=(num)=>{
    alert(num+5)

  }
  

  return (
    <>
      
      <h3>React Core concept 2</h3>
      <Friends></Friends>
      <Users></Users>

      <Team></Team>
      <Counter></Counter>



      <button onClick={handleClick}>Click Me</button>
      <br />
      <button onClick={handleClicked2}>Click 2</button>
      <br />

      <button onClick={()=>alert('3rd btn clicked')}>Click 3</button>
      <br />
      {/* <button onClick={addToFive(3)}>Click 4</button> */}

      {/* if i want to send arguments in paramas i need to write a arrow function in a onClick.
      i should not directly call the function in that onclick and send arguments */}

      <button onClick={()=>addToFive(3)}>Click 4</button>

      {/* difference between html event handler and react event handler
      
      <button onclick='myFunction()'></button>
      <button onClick={myFunction}></button>
      
      1st one is in html and 2nd one is react
      */}
      
    </>
  )
}

export default App
