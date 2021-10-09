import React from 'react'
import { CartWidget } from './CartWidget'
import './NavBar.scss'
import navLogo from './logo.jpg';

export const NavBar = ( {logo} ) => {


    return (
        <header className="header">
            <img src={navLogo} alt="logo vivero los tilos" className="nav-logo"/>
            
            <div>
                <nav>
                    <p>Arboles</p>
                    <p>Arbustos</p>
                    <p>Florales</p>
                    <p>Insumos</p>
                </nav>

                <CartWidget/>

            </div>
        </header>
    )
}

