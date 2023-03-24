// import React from "react";
// import "./Header.css"
// import { Link } from "react-router-dom"

// const Header = () =>{

//     return (
//         <div className="header">
//             <div className="headerleft">
//                 <Link to ="/"><img className="header__icon" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/2560px-IMDB_Logo_2016.svg.png" alt = "imdb"/></Link> 
//                 <Link to ="/movies/popular" style={{textDecoration: "none"}} ><span>Most-Popular</span></Link>
//                 <Link to ="/movies/top_rated" style={{textDecoration: "none"}} ><span>Top-rated</span></Link>
//                 <Link to ="/movies/upcoming" style={{textDecoration: "none"}} ><span>Upcoming</span></Link>
//             </div>
//             </div>

//     )
// }

// export default Header
import React, { useState } from "react";
import "./Header.css";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const history = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (searchTerm.trim()) {
      history.push(`/search/${searchTerm}`);
      setSearchTerm("");
    }
  };

  return (
    <div className="header">
      <div className="headerLeft">
        <Link to="/">
          <img
            className="header__icon"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/2560px-IMDB_Logo_2016.svg.png"
            alt="IMDb"
          />
        </Link>
        <Link to="/movies/popular" style={{ textDecoration: "none" }}>
          <span>Most-Popular</span>
        </Link>
        <Link to="/movies/top_rated" style={{ textDecoration: "none" }}>
          <span>Top-rated</span>
        </Link>
        <Link to="/movies/upcoming" style={{ textDecoration: "none" }}>
          <span>Upcoming</span>
        </Link>
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search for a movie..."
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default Header