import React from 'react'
import logo from "../assets/navbar-logo.png"
import {FaLinkedin} from "react-icons/fa"
import {FaGithub} from "react-icons/fa"
import { FaInstagram } from 'react-icons/fa'

const Navbar = () => {
  return (
    <nav className=" mb-20 flex items-center justify-content justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img className="mx-2 w-20" src={logo} alt="" />
      </div>
      <div className= 'm-8 flex items-center justify-content gap-4 text-2xl'>
        <a href="https://www.linkedin.com/in/nathan-vaz18/" ><FaLinkedin /></a>
        <a href= "https://github.com/NathanBenches250"><FaGithub /></a>
        <FaInstagram />

      </div>
    </nav>
  )
}

export default Navbar;