import React, { useState } from 'react';
import './side-bar.css';
import { Snack } from '../button/snack';
import { NavItem } from '../nav-item/nav-item';
import dash from '../../assests/supply.svg'



export const SideBar = () => {
    const [open, setOpen] = useState(true)
    return(
        <div className={`side-bar ${!open && 'compress'}` }>
            <div className='snack' onClick = {() => {setOpen(open => !open)}}>
                <Snack animate={open} />
            </div>
            <div className='nav-marg'>
                <NavItem navIcon={dash} navText={'Dashboard'} />
                <NavItem navIcon={dash} navText={'Operations'} />
                <NavItem navIcon={dash} navText={'Records'} />
                <NavItem navIcon={dash} navText={'Supply Store'} />
                <NavItem navIcon={dash} navText={'Market Place'} />
                <NavItem navIcon={dash} navText={'Forums'} />
            </div>
        </div>
    )
}