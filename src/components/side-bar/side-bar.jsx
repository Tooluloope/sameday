import React, { useState } from 'react';
import './side-bar.css';
import { Snack } from '../button/snack';
import { NavItem } from '../nav-item/nav-item';
import supply from '../../assests/supply.svg'
import file from '../../assests/file.svg'
import chat from '../../assests/chat.svg'
import dash from '../../assests/dash.svg'
import cart from '../../assests/cart.svg'
import time from '../../assests/time.svg'




import { NavItemChild } from '../nav-item-child/nav-item-child';
import { TopNav } from '../topnav/top-nav';



export const SideBar = ({getOpen}) => {
    
    const [open, setOpen] = useState(true)

    
    return(
        <>
            <TopNav open={open} />
            <div  className={`side-bar ${!open && 'compress'}` }>
                <div className='snack' onClick = {() => {
                    setOpen(open => !open)
                    getOpen(open)}}>
                    <Snack animate={open} />
                </div>
            
                <div 
                // onClick = {() => {setOpen(true)
                //     getOpen(open)}} 
                    className='nav-marg'>
                    <NavItem open={open} navIcon={dash} navText={'Dashboard'} />
                    <NavItem open={open} isActive={true} navIcon={time} navText={'Operations'}>
                    <NavItemChild size='smm' notify={1} color={'#D80B0B'}>
                        Orders
                    </NavItemChild>
                    <NavItemChild size='smm' isActive={true} notify={1} color={'#D80B0B'}>
                        Production House
                    </NavItemChild>
                    <NavItemChild size='smm' notify={1} color={'#D80B0B'}>
                        Bids
                    </NavItemChild>
                    <NavItemChild>
                        Promotion/Discount
                    </NavItemChild>
                    <NavItemChild>
                        Out Sourcing
                    </NavItemChild>
                    </NavItem>
                    <NavItem open={open} navIcon={file} navText={'Records'} />
                    <NavItem open={open} navIcon={cart} navText={'Supply Store'} />
                    <NavItem open={open} navIcon={supply} navText={'Market Place'} />
                    <NavItem open={open} navIcon={chat} navText={'Forums'} size='smm' notify={1} color={'#D80B0B'} />
                </div>
            
                
            </div>
        </>
    )
}