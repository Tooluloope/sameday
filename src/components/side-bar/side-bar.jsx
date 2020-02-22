import React, { useState } from 'react';
import './side-bar.css';
import { Snack } from '../button/snack';
import { NavItem } from '../nav-item/nav-item';
import dash from '../../assests/supply.svg'
import { NavItemChild } from '../nav-item-child/nav-item-child';



export const SideBar = () => {
    const [open, setOpen] = useState(true)
    return(
        <div  className={`side-bar ${!open && 'compress'}` }>
            <div className='snack' onClick = {() => {setOpen(open => !open)}}>
                <Snack animate={open} />
            </div>
          
            <div onClick = {() => setOpen(true)} className='nav-marg'>
                <NavItem open={open} navIcon={dash} navText={'Dashboard'} />
                <NavItem open={open} isActive={true} navIcon={dash} navText={'Operations'}>
                   <NavItemChild  notify={1}>
                       Orders
                   </NavItemChild>
                   <NavItemChild isActive={true} notify={1}>
                       Production House
                   </NavItemChild>
                   <NavItemChild notify={1}>
                       Bids
                   </NavItemChild>
                   <NavItemChild>
                       Promotion/Discount
                   </NavItemChild>
                   <NavItemChild>
                       Out Sourcing
                   </NavItemChild>
                </NavItem>
                <NavItem open={open} navIcon={dash} navText={'Records'} />
                <NavItem open={open} navIcon={dash} navText={'Supply Store'} />
                <NavItem open={open} navIcon={dash} navText={'Market Place'} />
                <NavItem open={open} navIcon={dash} navText={'Forums'} notify={1} />
            </div>
          
            
        </div>
    )
}