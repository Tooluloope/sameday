import React from 'react'
import './nav-item-child.css';
import { Notify } from '../notify/notify';

export const NavItemChild = ({children, isActive, notify, size, color}) => {
    
    return(
        <a className={`${isActive && 'isActive'}`} href='/'>
            {children} { notify && <Notify color={color} size={size}>{notify}</Notify>}
        </a>
    )
}