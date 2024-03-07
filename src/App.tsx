
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LoginPage from './pages/Auth/login'
import Layout from './pages/Dashboard'
import LandingPage from './pages/LandingPage'
function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/login' Component={LoginPage}/>
          
          <Route path='/dashboard' Component={Layout}/>
          <Route path='/lp/inicio' Component={LandingPage}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
