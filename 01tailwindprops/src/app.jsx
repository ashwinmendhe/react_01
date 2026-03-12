import { useState } from 'preact/hooks'
import preactLogo from './assets/preact.svg'
import viteLogo from '/vite.svg'
import './app.css'
import Cards from '../components/cards'

export function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    name: "ashwin",
    age: 35
  }
  let newArray = [1,2,3]
  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl'>Tailwind test</h1>
<Cards username="chai" aObj = {myObj} newArray={newArray}/>
<Cards username={myObj.name} btnText="visit me"/>
    </>
  )
}