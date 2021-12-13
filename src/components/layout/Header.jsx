import React from 'react'
import {Link} from 'react-router-dom'
import '../CSS/Header.css'

function Header() {
    return (
        <div className="navbarContainer">
            <Link to='/' className="navbarTitle">F*** OFF</Link>
            <div className="navbarOptionContainer">
                <Link className="navbarOption" to='/uncensored'>Start Game</Link>
                <Link className="navbarOption" to='/match-history'>Match History</Link>
            </div>
        </div>
    )
}

export default Header
