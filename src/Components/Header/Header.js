import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
       <nav class="navbar navbar-expand-lg navbar-light bg-light">
           <div class="container-fluid">
               <Link to="/">
                   <div class="navbar-brand">
                   <img src="/images/logo.png" height="60" width="70" class="d-inline-block align-top" alt=""/>

                   </div>
               </Link>
               <button 
               class="navbar-toggler"
               type="button"
               data-bs-toggle="collapse"
               data-bs-target="#navbarNavDropdown"
               aria-controls="navbarNavDropdown"
               aria-expanded="false"
               aria-label="Toggle navigation"
               >
                   <span class="navbar-toggler-icon"></span>

               </button>
               <div class="collapse navbar-collapse" id="navbarNavDropdown">
                   <ul class="navbar-nav">
                       <Link to="/">
                           <li class="nav-item">
                               <a href="#" class="nav-link active" aria-current="page">Home</a>
                           </li>
                       </Link>
                       <Link to="/Destination">
                           <li class="nav-item">
                               <a href="#" class="nav-link">Destination</a>
                           </li>
                       </Link>
                       <Link to="/Contact">
                           <li class="nav-item">
                               <a href="#" class="nav-link">Contact</a>
                           </li>
                       </Link>
                       <Link to="/Login">
                           <li class="nav-item">
                               <a href="#" class="nav-link">Login</a>
                           </li>
                       </Link>

                   </ul>

               </div>

           </div>

       </nav>
    );
};

export default Header;