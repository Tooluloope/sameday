import React from 'react';
import './profile-nav.css';

export const ProfileNav = ({src}) => {

    return(
        <img width={'50'} height={'50'} className='profile-nav'  src={src} alt='profile' />
    )
}