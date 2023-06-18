import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import './App.css';
import StaffRegister from './pages/StaffRegister';
import Pgdac from './pages/Pgdac';
import Pgdbda from './pages/Pgdbda';
import Pgdmc from "./pages/Pgdmc";
import StudRegister from "./pages/StudRegister";
import Home from "./pages/Home";
import Pgdai from "./pages/Pgdai";

function App() {
  return (
    <>
      <BrowserRouter>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container">
            <Link className="navbar-brand" to="/home">Home</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
              aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ml-auto">
              <li className="nav-item dropdown">
            <Link className="nav-link dropdown-toggle" to="#" id="coursesDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Courses
            </Link>
            <ul className="dropdown-menu" aria-labelledby="coursesDropdown">
              <li>
                <Link className="dropdown-item" to="/pgdac">PG-DAC</Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/pgdbda">PG-DBDA</Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/pgdmc">PG-DMC</Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/pgdai">PG-DAI</Link>
              </li>
            </ul>
          </li>
                <li className="nav-item">
                  
                  <Link className="nav-link" to="/staffregister">Staff Login</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/studRegister">Student Login</Link>
                </li>
                <li className="nav-item dropdown">
            <Link className="nav-link dropdown-toggle" to="#" id="AdminDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
             Admin Login
            </Link>
            <ul className="dropdown-menu" aria-labelledby="AdminDropdown">
              <li>
                <Link className="dropdown-item" to="/pgdac">Staff Register</Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/pgdbda">Student Register</Link>
              </li>
            </ul>
          </li>
          <li className="nav-item ">
              <Link className="nav-link" style={{display:"flex", justifyContent:"end"}} to="/logout">Logout</Link>
            </li>
              </ul>
            </div>
          </div>
        </nav>

        <Routes>
          <Route path="/home" element={<Home/>} />
          <Route path="/pgdac" element={<Pgdac />} />
          <Route path="/pgdbda" element={<Pgdbda />} />
          <Route path="/pgdmc" element={<Pgdmc/>}/>
          <Route path="/pgdai" element={<Pgdai/>}/>
          <Route path="/staffregister" element={<StaffRegister />} />
          <Route path="/studRegister" element={<StudRegister />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
