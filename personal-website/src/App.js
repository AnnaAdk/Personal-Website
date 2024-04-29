import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'daisyui/dist/full.css';
import ParticleBackgroundCreate from './constants/background/particleBackground';
import NavbarTop from './constants/navbar/navbarTop';
import Experience from './pages/experience';
import HomePage from './pages/home';
function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<HomePage/>}/>
    <Route path="/experience" element={<Experience/>}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
