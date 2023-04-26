import React from 'react'
import Home from './pages/Home/Home'
import { dataContextProvider } from './context'

const App = () => {
  return (
    <dataContextProvider>
      <Home/>
    </dataContextProvider>
  )
}

export default App