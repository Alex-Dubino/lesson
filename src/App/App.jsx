// import arrJson from '../../../arr.json'
import Innfo from '../Pages/Info/Info'
import Crreate from '../Pages/Create/Create'
import {
  BrowserRouter as Router,
  Route,
  Routes,
  NavLink,
} from "react-router-dom";
function App() {

  return (
    <>
      <Router>
        <header>
          <nav>
            <NavLink to='/'>Innfo</NavLink>
            <NavLink to='/create'>Crreate</NavLink>
          </nav>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Innfo/> } />
            <Route path="/create" element={<Crreate/> } />
          </Routes>
        </main>
      </Router>
    </>
  )
}

export default App
