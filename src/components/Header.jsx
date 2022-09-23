import React from "react";
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <div className='bg-info text-center'>
            <Link to={{ pathname: "/game_website/", }}>
                <p>Game Center</p>
            </Link >
        </div>
    )
}

export default Header;