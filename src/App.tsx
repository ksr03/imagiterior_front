import React from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react'
// import Login from './pages/Login'
// import List from './pages/List'
// import Delete from './pages/Delete'
import Design from './pages/Design'
import NoMatch from './pages/NoMatch'
// import Sample from './pages/Sample'

function App (): JSX.Element {
  return (
    <div className='App'>
      <ChakraProvider>
        <Routes>
          <Route path='/' element={<Design/>} />
          {/* <Route path='/list' element={<List/>} />
          <Route path='/delete' element={<Delete/>} />
          <Route path='/design' element={<Design/>} /> */}
          <Route path='*' element={<NoMatch/>} />
          {/* <Route path='/sample' element={<Sample/>} /> */}
        </Routes>
      </ChakraProvider>
    </div>
  )
}

export default App
