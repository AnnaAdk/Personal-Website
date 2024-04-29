import 'daisyui/dist/full.css';
import { Link } from 'react-router-dom';
import Experience from '../../pages/experience';
import HomePage from '../../pages/home';

const NavbarTop = () =>{
return(
<div className="navbar">
  <div className="navbar-start">
    <div className="dropdown">
      
    </div>
    <a className="btn btn-ghost text-xl">Ashamsa Adhikari</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><Link to ="/"><a>Home</a></Link></li>
      <li><a>Education</a></li>
      <li><Link to="/experience">Experience</Link></li>
      <li><a>Resume</a></li>
    </ul>
  </div>
  <div className="navbar-end">
  </div>
</div>
)}

export default NavbarTop;