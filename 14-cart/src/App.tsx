import React from 'react'
import { useGlobalContext } from './Components/Context/context'

// components
import Navbar from './Components/Navbar/Navbar'
import CartContainer from './Components/Cart/CartContainer'
// items

function App() {
    const {loading} = useGlobalContext();

  if (loading) {
    return (
      <div className='loading'>
        <h1>Loading...</h1>
      </div>
    )
  }
  return (
    <main>
      <Navbar />
      <CartContainer />
    </main>
  )
}

export default App
