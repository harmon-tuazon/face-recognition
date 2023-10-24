import Brain from '../assets/brain.png'
import ParticlesBg from 'particles-bg'
import { NavLink, Outlet } from "react-router-dom";
import Tilt from 'react-parallax-tilt';


const Navigation = () => {
    return (
        <div className='main-container'>

            <ParticlesBg type="cobweb" num={200} bg={true} color="#FFFFFF" />

            <header className='nav-bar'>
                    <NavLink to="/">
                        <Tilt className='tilt br2 shadow-2'>
                            <img className='logo-img' alt="logo" src={Brain} />
                        </Tilt>
                    </NavLink>
                <div className="nav-links">
                    <NavLink to="about">About</NavLink>
                    <NavLink to="sign-in">Sign-in</NavLink>
                </div>
            </header>
            <main className='recognition-container'>
                <Outlet />
            </main>

        </div>
    )
}

export default Navigation;