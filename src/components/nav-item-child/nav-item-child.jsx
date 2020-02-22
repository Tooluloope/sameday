import React from 'react'
import './nav-item-child.css';

export const NavItemChild = ({children}) => {
    return(
        <a href='/'>
            {children}
        </a>
    )
}