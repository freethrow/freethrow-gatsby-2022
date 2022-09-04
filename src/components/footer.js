import React from 'react'

import {IoLogoGithub, IoLogoLinkedin} from 'react-icons/io'
import {SiUpwork} from 'react-icons/si' 

const Footer = () => {
  return (
    <footer className="py-5 bg-white text-headline font-Noto font-base flex flex-row justify-center items-center h-10">
        <div className="mx-2 md:mx-auto text-center">
          FREETHROW.RS <br /> Personal website of Marko Aleksendrić, 2022
        </div>
    </footer>
  )
}

export default Footer