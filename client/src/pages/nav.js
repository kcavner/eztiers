import React from 'react'
import {Link } from 'react-router-dom'

export default function Nav(){

    return(
        <header>
            <nav>
                <Link to="/tier">Tiers</Link>
                <Link to="/register">Register</Link>
            </nav>
        </header>
    )
}