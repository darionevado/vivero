import React from 'react'
import { useContext } from 'react'
import { CartWidget } from './CartWidget'
import navLogo from './logo-web.png';
import { Link, NavLink } from 'react-router-dom'
import { UserAuthContext } from '../../context/UserAuthContext'
import './NavBar.scss'

export const NavBar = ( {logo} ) => {

    const { isAuthenticated, setIsAuthenticated } = useContext(UserAuthContext);
    const handlesubmit = () => {
        setIsAuthenticated(false);
    }

    const { logout } = useContext(UserAuthContext);

    return (
        
        <header className="header">
            
            <img src={navLogo} alt="logo vivero los tilos" className="nav-logo"/>
            
            <div>
                <nav>

                    <NavLink activeClassName={'activeLink'} exact to="/">Inicio</NavLink>

                    <NavLink activeClassName={'activeLink'} exact to="/productos/arboles">Arboles</NavLink>
                    <NavLink activeClassName={'activeLink'} exact to="/productos/arbustos">Arbustos</NavLink>
                    <NavLink activeClassName={'activeLink'} exact to="/productos/florales">Florales</NavLink>
                    <NavLink activeClassName={'activeLink'} exact to="/productos/insumos">Insumos</NavLink>

                    <NavLink activeClassName={'activeLink'} exact to="/contacto">Contacto</NavLink>

                    <Link to='/cart'>
                        <CartWidget />
                    </Link>
                    <button onClick={logout}> Salir</button>    
                </nav>
            </div>
        </header>
    );
};