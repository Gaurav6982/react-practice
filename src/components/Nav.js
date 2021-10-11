import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
    return (
        <div className="nav">
            <ul>
                <li><Link to="/">Home Page </Link></li>
                <li><Link to="/create_post">Create Post</Link></li>
                <li><Link to="/create_my_todo">Create Todo</Link></li>
                <li><Link to="/show_todo">Show Todo</Link></li>
            </ul>
        </div>
    )
}

export default Nav
