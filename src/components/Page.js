import React from 'react'
import "./Page.css"

export default ({children, onClick}) => {
    return (
        <div className="PageBackground" onClick={onClick}>
            <div className="PageBackgroundShadow">
                {children}
            </div>
        </div>
    )
}