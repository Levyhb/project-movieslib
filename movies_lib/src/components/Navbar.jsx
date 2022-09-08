import React, { useState } from 'react'
import { BiCameraMovie, BiSearchAlt } from "react-icons/bi";
import { Link, useNavigate } from 'react-router-dom';
import '../Styles/components/Navbar.css';

export default function Navbar() {
  const [search, setSearch] = useState();
  const navigate = useNavigate();

  const navigateBtn =  async (e) => {
    e.preventDefault();
    
    if(!search) return;

    navigate(`/search?q=${search}`)
    setSearch('');
  }

  return (
    <nav id="navbar">
      <h2>
        <Link to="/">
          <BiCameraMovie />
          Movies_Lib
        </Link>
      </h2>
      <form onSubmit={navigateBtn}>
        <input
        type="text"
        placeholder="Search for a movie"
        onChange={({target}) => setSearch(target.value)}
        value={search}
        />
        <button type="submit">
          <BiSearchAlt />
        </button>
      </form>
    </nav>
  )
}
