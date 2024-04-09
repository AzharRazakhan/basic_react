
import { useEffect, useState } from 'react'
import './App.css'
import { ThemeProvider } from './context/theme'
import ThemeBtn from './component/ThemeBtn';
import Card from './component/Card';

function App() {
  const  [themeMode,setTheme] = useState('light');
  const lightTheme = () => {
    setTheme('light')
  }
  const darkTheme = () => {
    setTheme('dark')
  }

  useEffect(() => {
    document.querySelector('html')?.classList.remove('dark','light')
    document.querySelector('html')?.classList.add(themeMode)
  },[themeMode])



  return (
    // eslint-disable-next-line no-undef
    <ThemeProvider value={{themeMode,lightTheme,darkTheme}}>
    <div className="bg-[#172842] min-h-screen py-8">
    <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
        <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
        <div className="mb-4">
          <ThemeBtn/>
        </div>
        <div className="flex flex-wrap gap-y-3">
           <Card/>
        </div>
    </div>
    </div>   
    </ThemeProvider> 
  )
}

export default App
