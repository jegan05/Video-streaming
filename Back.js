import React from 'react'
import { Link } from 'react-router-dom'

export default function Back() {
    return (
        <div id="iop">
            <h1 className="main-title home-page-title">welcome to our app</h1>
            <Link to="/">
                <button className="primary-button">Log out</button>
            </Link>
        </div>
    )
}