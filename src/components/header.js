import * as React from "react"

import { Link } from "gatsby"

import {IoIosMenu} from "react-icons/io"
import { useState } from "react"


const Header = () => {

  const [navOpen, setNavOpen] = useState(false)


  return (
  <header className=" font-semibold text-headline font-Noto text-lg relative py-4">
    <div className="absolute top-0 left-0 w-full -z-30">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
  <path fill="#ffd803" fillOpacity=".1" d="M0,32L21.8,48C43.6,64,87,96,131,128C174.5,160,218,192,262,202.7C305.5,213,349,203,393,186.7C436.4,171,480,149,524,160C567.3,171,611,213,655,208C698.2,203,742,149,785,128C829.1,107,873,117,916,112C960,107,1004,85,1047,69.3C1090.9,53,1135,43,1178,74.7C1221.8,107,1265,181,1309,208C1352.7,235,1396,213,1418,202.7L1440,192L1440,0L1418.2,0C1396.4,0,1353,0,1309,0C1265.5,0,1222,0,1178,0C1134.5,0,1091,0,1047,0C1003.6,0,960,0,916,0C872.7,0,829,0,785,0C741.8,0,698,0,655,0C610.9,0,567,0,524,0C480,0,436,0,393,0C349.1,0,305,0,262,0C218.2,0,175,0,131,0C87.3,0,44,0,22,0L0,0Z"></path>
</svg>
    </div>
    <div className="flex flex-row justify-between items-center mx-4 lg:mx-auto lg:px-2 max-w-[1440px]">
      <div className="logo text-2xl font-DarkGrotesque "><Link to="/">freethrow</Link></div>
      <IoIosMenu size={40} className="lg:hidden" onClick={()=>setNavOpen(!navOpen)} />
      <nav className="bignav space-x-2 lg:flex flex-row hidden">
        <Link to="/">Home</Link>
        <Link to="/portfolio">Work</Link>
        <Link to="/book">Book</Link>
        <Link to="/about">About</Link>
      </nav>
    </div>
    {navOpen&&<div>
      <nav className="flex flex-col w-3/4 items-start mx-4 justify-center mt-8 lg:hidden ">
        <Link to="/">Home</Link>
        <Link to="/portfolio">Work</Link>
        <Link to="/book">Book</Link>
        <Link to="/about">About</Link>
      </nav>
      </div>}
    
  </header>
)}



export default Header
