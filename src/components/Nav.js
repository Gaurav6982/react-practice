import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
    return (
        <div className="nav">
            <ul>
                <li><Link to="/">Home Page </Link></li>
                <li><Link to="/create_post">Create Post</Link></li>
            </ul>
        </div>
    )
}

export default Nav
