import { BrowserRouter, Route, Routes, useMatch } from "react-router-dom"
import Auth from "./pages/Auth"

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
        <Route path='/' element={<Auth />} />
      </Routes>
    </>
  )
}

export default App