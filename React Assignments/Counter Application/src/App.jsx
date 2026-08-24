import { use, useState } from 'react'
import './App.css'

function App() {

  var [count,Setcount] = useState(0)

  var increesefunc = () => {
    Setcount(count+1)
  }

  var decresefunc = () => {
    Setcount(count-1)
  }

  var Resetfunc = () => {
    Setcount(0)
  }

  if(count<0){
    Setcount(0)
  }

  return (
    <>
      <div className="card">
        <h1>Count:{count}</h1>
        <div className="displayflex-class">
          <button className='Incr-button' onClick={increesefunc}>Incremeent</button>
          <button className='Decr-button' onClick={decresefunc} >Decremeent</button>
        </div>
        <button className='Reset-button' onClick={Resetfunc} >Reset</button>
      </div>
    </>
  )

}

export default App
