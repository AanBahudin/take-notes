import React from 'react'
import {Navbar, Footer, Error} from './components'
import {Homepage, LoginPage, MyNotes, Profile, SignupPage} from './pages'
import { Routes, Route } from 'react-router-dom'

const App = () => {

  const token = document.cookie

  return (
    <div className='bg-white dark:bg-darkBackground duration-200'>
      <Navbar />
        <Routes>
          <Route path='/' element={<Homepage />} />
          {token ? <Route path='/notes' element={<MyNotes />} /> : null}
          <Route path='/login' element={<LoginPage />} />
          {token ? <Route path='/profile' element={<Profile />} /> : null}
          <Route path='/signup' element={<SignupPage />} />
          <Route path='*' element={<Error />} />
        </Routes>
      <Footer />
    </div>
  )
}

export default App;
