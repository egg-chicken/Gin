import React, { Component } from 'react'
import "./Page.css"

export default ({children}) => {
    return (
        <div className="PageBackground">
            <div className="PageBackgroundShadow">
                {children}
            </div>
        </div>
    )
}