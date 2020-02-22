import React from 'react'
import './nav-item-child.css';
import { Notify } from '../notify/notify';

export const NavItemChild = ({children, isActive, notify, size}) => {
    return(
        <a className={`${isActive && 'isActive'}`} href='/'>
            {children} { notify && <Notify size={size}>{notify}</Notify>}
        </a>
    )
}