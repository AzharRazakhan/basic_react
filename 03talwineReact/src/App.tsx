import './App.css'
import Card from './Card'

function App() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const myObj ={
    name: 'Delba',
    age: 25,
    hobbies: ['Sports', 'Music', 'Cooking']
  }

  return (
    <>
    <h1 className='bg-green-400 text-black'>Tailwin Css</h1>
    <Card  username="salman" btnTxe="one"/>
    <Card  username="queen" />

    </>
    )
}

export default App
