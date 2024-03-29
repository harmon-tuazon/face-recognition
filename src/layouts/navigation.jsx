import Brain from '../assets/brain.png'
import ParticlesBg from 'particles-bg'
import Tilt from 'react-parallax-tilt';
import { NavLink, Outlet } from "react-router-dom";
import { useState, createContext } from 'react';



const defaultUser = { id:'',
                      name: '', 
                      entries: '',
                      email: ''    }


export const Context = createContext();

export const Navigation = () => {
    const [userData, setUserData] = useState(defaultUser)

    return (
        <Context.Provider value = {[userData, setUserData]}>
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
                        <NavLink to="sign-in">{userData != defaultUser ? "Sign-in":
                            "Sign-out"}</NavLink>
                    </div>
                </header>
                <main className='recognition-container'>
                    <Outlet/>
                </main>

            </div>
        </Context.Provider>
    )
}

