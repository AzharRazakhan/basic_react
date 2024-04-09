
import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState("olive")

  return (
    <div className='w-full h-screen px-3'
    style={{backgroundColor: color}}
    >
      <div className='fixed flex flex-wrap justify content bottom-12 inset-x-2 px-2'>
          <div className='flex flex-wrap justify  bg-white content gap-3 shadow-lg py-3 rounded-3xl'>
      <button className='outline-none px-4 py-1  rounded-full' style={{backgroundColor: 'blue'}} onClick={() => setColor('blue')}>blue</button>
      <button className='outline-none px-4 py-1  rounded-full bg-red-600' onClick={() => setColor('red')}>red</button>
      <button className='outline-none px-4 py-1  rounded-full bg-yellow-600' onClick={() => setColor('yellow')}>yellow</button>
      <button className='outline-none px-4 py-1  rounded-full bg-green-600' onClick={() => setColor('green')}>green</button>
      <button className='outline-none px-4 py-1  rounded-full bg-black-600' onClick={() => setColor('black')}>black</button>

          </div>
      </div>

    </div>
  )
}

export default App
