import {useDispatch, useSelector} from 'react-redux'
import { Increement , Decremeent , Reset } from './redux/Counter/counterslice'
import './App.css'

function App() {

  var countervalue = useSelector((state) => state.Counter.value)
  var dispatch = useDispatch()

  return (
    <>
    <h1>This is a Counter {countervalue}</h1>
    <button onClick={() => dispatch(Increement())}>Increement</button> 
    <button onClick={ () => dispatch(Decremeent())}>Decreement</button>
    <button onClick={ () => dispatch(Reset())}>Reset</button>
    
    </>
  )

}

export default App
