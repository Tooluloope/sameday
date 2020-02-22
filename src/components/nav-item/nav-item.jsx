import React, { useState, useEffect } from 'react';
import './nav-item.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'


export const NavItem = ({navIcon, navText , isActive, children, open}) => {

    const [drop, setDrop] = useState(false)
    const handleDropdown = () => {
       if (open && children) {
           setDrop(drop => !drop)
       }
    }
    useEffect(() => {
        console.log(drop)
        
    }, [drop])

    return(
        <div onClick = {handleDropdown} className={`${isActive && 'isActive'} nav-item`}>
 
            <img className='nav-icon' alt={navText}  src={navIcon} />            
            <span className='nav-text'>
                {navText} 
            </span>
            <span>
            {children && <FontAwesomeIcon size="lg" className='fa-icon' color={`${drop ? 'white': '#196BD8'}`} icon={faCaretDown} />}
            </span>
            <ul className='dropdown-menu'>
                {children}      
            </ul>
            

        </div>
    )
}
