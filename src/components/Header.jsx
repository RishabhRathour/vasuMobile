import React from 'react'
import { Link } from 'react-router-dom'
import {HashLink} from 'react-router-hash-link'

const Header = () => {
  return (
    <nav>
      <HashLink to={"/"}>
        <h1>Vasu Mobile</h1>
        </HashLink>
      <main>
       
         <HashLink to={"/#sell"}>Sell Your Phone</HashLink>
        <HashLink to={"/#buy"}>Buy Phone</HashLink>
        <HashLink to={"/#repair"}>Repair</HashLink>
        <Link to={"/services"}>Services</Link>
        <Link to={"/login"}>Login /Signup</Link>
       
      </main>
    </nav>
  );
}

export default Header