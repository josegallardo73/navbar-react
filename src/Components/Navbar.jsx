import React from 'react';
import CartWidget from './CartWidget'
const Navbar = (props) => {
    
    return (
        <React.Fragment>
            <navbar className="navbar">
                <h2 className="navbar__titulo">GamesStock</h2>
                <div className ="categorias">
                <ul className="categorias__menu">
                    <li className="categorias__item"><a href="{#}">{props.categorias[0]}</a></li>
                    <li className="categorias__item"><a href="{#}">{props.categorias[1]}</a></li>
                    <li className="categorias__item"><a href="{#}">{props.categorias[2]}</a></li><li className="categorias__item"><a href="{#}">{props.categorias[3]}</a></li>
                </ul>
                </div>
                <CartWidget />
            </navbar>
        </React.Fragment>
        
     )
}

export default Navbar;