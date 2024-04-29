import ParticleBackgroundCreate from "../constants/background/particleBackground";
import NavbarTop from "../constants/navbar/navbarTop";

function HomePage(){
    return(
    <>
    <div className='navbar'>
    <NavbarTop/></div>
   <div className='background-div'>
         <ParticleBackgroundCreate/>
   </div>
   </>
   )
}
export default HomePage;