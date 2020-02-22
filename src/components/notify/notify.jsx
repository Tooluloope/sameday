import React from 'react'

import './notify.css'

export const Notify = ({children, size}) => {
    return(
        <div className={`notify ${size}`} >
            {children}
        </div>
    )
}