import { BrowserRouter, Route, Routes, useMatch } from "react-router-dom"
import Login from './components/Login.jsx'
import Register from './components/Register.jsx'
import Nav from './components/Nav.jsx'

function App() {
  return (
    <BrowserRouter>
      <Root />
    </BrowserRouter>
  )
}

function Root() {
  const match = useMatch({ path: '/' })

  return (
    <>
      {!match ? <Nav /> : <></>}
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </>
  )
}

export default App