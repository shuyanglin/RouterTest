import logo from './logo.svg';
import './App.css';
import Home from './pages/home';
import About from './pages/about';
import Contact from './pages/contact';
import { Routes, Link, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <nav>
        <ul>
          <li>  
            <Link to="/">Home</Link>
          </li>
          <li>  
            <Link to="/about">About</Link>
          </li>
          <li>  
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
      
      <Routes>
        <Route exact path="/" element={<Home/>}>
          
        </Route>
        <Route exact path="/about" element={<About/>} >
          
        </Route>
        <Route exact path="/contact" element={ <Contact/>}>
         
        </Route>
      </Routes>
    </>
  );
}

export default App;
