import React from 'react';
import './top-nav.css';
import logo from '../../assests/logo.svg'
import shopping from '../../assests/shopping-cart.svg'
import mail from '../../assests/mail.svg'
import menu from '../../assests/menu.svg'
import image from '../../assests/0.jpeg'



import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faSearch } from '@fortawesome/free-solid-svg-icons';
import { ProfileNav } from '../profile-nav/profile-nav';
import { Notify } from '../notify/notify';

export const TopNav = ({open}) => {

    return(
        <div className={`${open ? 'small-nav': 'big-nav'} top-nav`}>
            
            <img className='logo' src={logo} alt="logo"/>
            <ul className="navigation-links mt-0 mb-0">
                <li className='search'>
                    <FontAwesomeIcon size="lg" className='fa-icon-top' color='#4B4B4B' icon={faSearch} />
                    <input type="search" id="search" placeholder="Search"/>
                </li>
                <li>
                    <img style={{height:'20px'}} src={mail} alt='shopping' /> <Notify className='top-notify' color={'#007BFF'} size={'smm'}>1</Notify>
                    Message
                </li>
                <li>
                    <img src={shopping} alt='shopping' /> <Notify className='top-notify' color={'#007BFF'} size={'smm'}>1</Notify>
                    Market Place <FontAwesomeIcon size="lg" className='fa-icon-top' color='#4B4B4B' icon={faCaretDown} />
                </li>
                <li className="active">
                    <img src={menu} alt='shopping' /> <Notify className='top-notify' color={'#007BFF'} size={'smm'}>1</Notify>
                    Notifications
                </li>

                <li className='pro-nav'>
                    <ProfileNav src = {image} />
                </li>
            </ul>
        </div>
    )
}