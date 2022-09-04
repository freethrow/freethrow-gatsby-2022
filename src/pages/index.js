import * as React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"
import { StructuredText } from 'react-datocms';
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import {AiOutlineCheck} from 'react-icons/ai'

import { RoughNotation, RoughNotationGroup } from "react-rough-notation";

import BackgroundImage from 'gatsby-background-image'

import Layout from "../components/layout"
import Seo from "../components/seo"

import Box from "../components/Box"


import { gsap } from "gsap";

import Undraw from "../assets/undraw.svg"

import House from "../assets/house.svg"
import Book from "../assets/book.svg"

const IndexPage = (props) => {

/*   console.log(props)

  const image = getImage(props.data.datoCmsPage.cover)
  const imageData = props.data.datoCmsPage.cover.fluid
  
  const bckg = React.useRef();
  const info = React.useRef();

  React.useEffect(() => {
    const tl = gsap.timeline({defaults: {duration:.8}})
    tl.fromTo(bckg.current, {scale:8.2}, {scale:0.8})
    tl.fromTo(bckg.current, {opacity:0.2}, {opacity:1},'<')
    tl.fromTo(info.current,{opacity:0.2}, {opacity:1},'<')

  },[]);  */
  
 return (
  <Layout>
  <div className="flex flex-row justify-center items-center w-full">

    <div className="hidden md:flex flex-row justify-center items-center md:w-1/2">
      <House height={300} />
    </div>

    <div className="flex flex-col text-headline font-thin md:w-1/2 leading-8">
      <h2 className="text-2xl lg:text-7xl font-black hover:text-black my-5">Web Development & Data Analytics</h2>
      <RoughNotationGroup show={true}>
        <p>
        Hello! My name is 
          <RoughNotation type="highlight" color="#ffd803"> Marko Aleksendrić </RoughNotation><br/>
        I am the author of the book 
        <RoughNotation type="underline"><Link to="/book" className=" font-bold"> FullStack FastAPI, React and MongoDB </Link></RoughNotation>
   - that's probably why you are here, right? This is my personal website on which I post about stuff that I find interesting, projects and really anything related to:<br/>
  <RoughNotation type="box"><AiOutlineCheck className="inline" /> full-stack web development </RoughNotation><br/>  
  <RoughNotation type="highlight"  color="#ffd803"><AiOutlineCheck className="inline" /> Python / JavaScript </RoughNotation><br/>
  <RoughNotation type="box"><AiOutlineCheck className="inline" /> Data Visualization and Data Science </RoughNotation><br/> 
 </p>

</RoughNotationGroup> 
  


  </div>



  </div>
  


{/*     <div ref={bckg}>
     <BackgroundImage
 
      Tag="section"
      className=" h-96 p-6 bg-cover bg-center bg-no-repeat w-full flex flex-col justify-center items-center text-gray"
      fluid={imageData}
      backgroundColor={"#fefefe"}
    >
      <div className=" drop-shadow-lg text-5xl">freethrow</div>
      <div ref={info} className=" drop-shadow-lg text-2xl border-t-2 border-gray">web development + data science</div>
    </BackgroundImage>
    </div> */}
 
 {/* 
      <div className=" bg-yellow h-full flex flex-col"><StructuredText data={props.data.datoCmsPage.content} /></div>
    
    
 */}





   
  </Layout>
  )
  }
/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage

export const query = graphql`
query HomePageQuery {
  datoCmsPage(name: {eq: "first"}) {
    id
    cover {
      fluid {
        base64
        width
        height
        sizes
        src
        srcSet
      }
    }
    content {
      value
    }
  }
}

`