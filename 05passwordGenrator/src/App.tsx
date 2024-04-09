
import { useCallback, useEffect, useRef, useState } from 'react'

function App() {
  const [length,setLength] = useState(8)
  const [numberAllowed,setNumberAlllowed] = useState(false)
  const [charAllowed,setCharAllowed] = useState(false)
  const [password,setPassword] = useState('')

  const passwordRef = useRef(null)

  const passwordGeneration = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numberAllowed) str +='1234567890';
    if(charAllowed) str +='!$%&?^*-+=[]{}';
    for(let i = 1; i <= length; i++){
      const char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass)


  },[length,numberAllowed,charAllowed,setPassword])

const copyOnClipborad = useCallback(() => {
  console.log(passwordRef)
  passwordRef?.current?.select()
  window.navigator.clipboard.writeText(password);
},[password])

  useEffect(() => {
    passwordGeneration()
  },[length,numberAllowed,charAllowed,setPassword,passwordGeneration])

  return (
    <div className='w-full h-full max-w-md mx-auto shadow-md rounded-lg my-20 text-orange-500 m-0 bg-gray-800'>
      <h1 className="text-white text-center">Password Genrator</h1>
    <div className='flex shadow rounded-lg overflow-hidden mb-4'>
      <input type="text" 
      value={password}
      className='outline-none w-full py-1 px-3'
      placeholder='password'
      readOnly
      ref={passwordRef}
      />
      <button onClick={copyOnClipborad} className='outline-none bg-blue-700 text-white py-3 shrink-0' >Copy</button>
    </div>
    <div className='flex  text-sm gap-x-2'> 
      <div className='flex items-center gap-x-1'>
    <input type="range" 
    value={length}
    min={8}
    max={100}
    className='cursor-pointer'
    onChange={(e:any) => setLength(e?.target?.value)}
    />
    <label>Length {length}</label>
      </div>
      <div className='flex items-center gap-x-1'>
    <input type="checkbox"
    defaultChecked={numberAllowed}
    id="inputNumber"
    onChange={() => setNumberAlllowed((prev) => !prev)}
    />
    <label>Number</label>
      </div>
      <div className='flex items-center gap-x-1'>
    <input type="checkbox"
    defaultChecked={charAllowed}
    id="inputNumber"
    onChange={() => setCharAllowed((prev) => !prev)}
    />
    <label>Charactor</label>
      </div>
    </div>
    </div>
  )
}

export default App
