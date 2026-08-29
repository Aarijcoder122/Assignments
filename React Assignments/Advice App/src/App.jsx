import { use, useState } from 'react'
import './App.css'

function App() {

  var data = [
    "Learn HTML",
    "Learn CSS",
    "Learn JavaScript"
  ]

  
  var [step,Setstep] = useState(0)
  var [data,Setdata] = useState(data)

  var Nextfunc = () => {

    Setstep(step + 1)
    if(step==3){
      Setstep(0)
    }
  }

    var Prevfunc = () => {
    Setstep(step-1)
    if(step==1){
      Setstep(3)
    }
  }


  return (

    <>
    <div className='main-div'>
      <p style={{
        backgroundColor: step==1 ? "Blue" : "lightgray",
        color: step==1 ? "white" : "black",
}}>1</p>
      <p style={{
        backgroundColor: step==2 ? "Blue" : "lightgray",
        color: step==2 ? "white" : "black",
      }}>2</p>
      <p style={{
        backgroundColor: step==3 ? "Blue" : "lightgray",
        color: step==3 ? "white" : "black",
      }} >3</p>
    </div>
      <h1>Advice: {data[step-1]}</h1>
    <div className='button-div'>
      <button className='Next-button' onClick={Nextfunc}>Next</button>
      <button className='Prev-button' onClick={Prevfunc}  >Previous</button>
    </div>  
    </>

  )
}

export default App
