import React from 'react'
import { CartWidget } from './CartWidget'
import './NavBar.scss'

export const NavBar = ( {logo} ) => {


    return (
        <header className="header">
            <h1>{logo}</h1>

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

