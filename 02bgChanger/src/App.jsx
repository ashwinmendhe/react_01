import { useState } from 'react'


function App() {
  const [color, setColor] =useState("olive")
  return (
 <div className='w-full h-screen duration-200'
 style={{backgroundColor : color}}
 >
  <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
    <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-xl '>
      <button onClick={()=> setColor("red")}
      className='outeline-none px-4 py-1 rounded-full text-white shadow-lg'
      style={{backgroundColor:"red"}}>Red</button>
      <button 
      onClick={()=> setColor("green")}
      className='outeline-none px-4 py-1 rounded-full text-white shadow-lg'
      style={{backgroundColor:"green"}}>Green</button>
      <button 
      onClick={()=> setColor("pink")}
       className='outeline-none px-4 py-1 rounded-full text-white shadow-lg'
      style={{backgroundColor:"pink"}}>Pink</button>
      <button  
      onClick={()=> setColor("blue")}
      className='outeline-none px-4 py-1 rounded-full text-white shadow-lg'
      style={{backgroundColor:"blue"}}>blue</button>
      <button  
      onClick={()=> setColor("purple")}
      className='outeline-none px-4 py-1 rounded-full text-white shadow-lg'
      style={{backgroundColor:"purple"}}>Purple</button>
      </div>
  </div>
 </div>
  )
}

export default App
