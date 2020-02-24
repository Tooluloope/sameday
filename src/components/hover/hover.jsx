import React from 'react';
import image1 from '../../assests/image1.png'
import image2 from '../../assests/image2.png'
import image3 from '../../assests/image3.png'


import './hover.css';

export const Hover = () => {


    return (
        <div className='row absolute pt-5 pb-2'>
            <div className='col-3'>
                <img width='200' src={image1} alt='image1' />
                <p className='text-center mt-3'>Front</p>
            </div>
            <div className='col-3'>
                <img width='200' src={image2} alt='image2' />
                <p className='text-center mt-3'>Back</p>
            </div>
            <div className='col-3'>
                <img width='200' src={image3} alt='image3' />
                <p className='text-center mt-3'>Side</p>
            </div>
            <div className='col-3'>
                <img width='200' src={image2} alt='image2' />
                <p className='text-center mt-3'>Side</p>
            </div>
        </div>
    )
}