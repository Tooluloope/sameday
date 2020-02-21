import React from 'react';
import './nav-item.css';

export const NavItem = ({navIcon, navText}) => {

    return(
        <div className='nav-item'>
            <img className='nav-icon' alt={navText}  src={navIcon} />            
            <span className='nav-text'>
                {navText}
            </span>

        </div>
    )
}
