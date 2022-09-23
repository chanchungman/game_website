import React from "react";
import { Link } from 'react-router-dom';
const SearchBar = () => {
    return (
        <div className='text-center'>
            <form action="/game_website/results">
                <input type='text' name='search'/>
                <input type="submit" value="Search" />
            </form>
        </div>
    )
}

export default SearchBar;