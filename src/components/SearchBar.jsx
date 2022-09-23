import React from "react";
import { useNavigate } from 'react-router-dom';
const SearchBar = () => {
const navigate = useNavigate();
  const handleSubmit = event => {
    event.preventDefault();

    // 👇️ redirect to /contacts
    navigate('/game_website/results');
  };
    return (
        <div className='text-center'>
            <form onSubmit={handleSubmit}>
                <input type='text' name='search'/>
                <input type="submit" value="Search" />
            </form>
        </div>
    )
}

export default SearchBar;