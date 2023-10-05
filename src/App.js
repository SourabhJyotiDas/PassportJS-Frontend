import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Login from './components/Login'
import Homepage from './components/Homepage.jsx'
import Register from './components/Register.jsx'
import Secretpage from './components/Secretpage.jsx'
import Navbar from './components/Navbar'
import { useDispatch } from "react-redux"
import { loadUser } from "./Redux/actions/user"
import { useEffect } from "react"


function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadUser())
  }, [dispatch])
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path={"/"} element={<Homepage />} />
          <Route path={"/secretpage"} element={<Secretpage />} />
          <Route path={"/login"} element={<Login />} />
          <Route path={"/register"} element={<Register />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
