// import { useState } from 'react'
import './App.css'
import NavBar from './components/navbar'
import Tabs from './components/tabs'
import { app } from './firebase'
import AuthForm from './pages/auth'
  function App() {
  // const [count, setCount] = useState(0) 
  const styles={
    width:"84vw",
  }
  console.log(app);
  return (
      <div className='flex flex-col items-center' style={styles}>
       <NavBar />
       <Tabs />
      </div>
  )
}
export default App