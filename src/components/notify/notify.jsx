import React from 'react'

import './notify.css'

export const Notify = ({children, size, color, className}) => {
    console.log(color)
    return(
        <div style={{background: color }} className={`notify ${size} ${className}`} >
            {children} 
        </div>
    )
}