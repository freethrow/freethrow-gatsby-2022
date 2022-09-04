import * as React from "react"
import { graphql } from "gatsby"
import { StructuredText } from 'react-datocms';
import { GatsbyImage } from "gatsby-plugin-image"

import Book from "../assets/book.svg"

import { gsap } from "gsap";

import Layout from "../components/layout"
import Seo from "../components/seo"



const BookPage = (props) => {




 
  const imageData = props.data.datoCmsPage.cover.gatsbyImageData
  
  
 return (
  <Layout>

<div className="flex flex-row justify-center items-center w-full">
  <div className="hidden md:flex flex-row justify-center items-center md:w-1/2">
    <Book height={300} />
  </div>

<div className="flex flex-col text-headline font-thin md:w-1/2">
  <h2 className=" text-7xl font-black hover:text-black my-5">My Book</h2>
  <div className="structured"> 
        <StructuredText data={props.data.datoCmsPage.content} />
  </div>
      
</div>
</div>


   
  </Layout>
  )
  }
/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Book" />

export default BookPage

export const query = graphql`
query BookPageQuery {
  datoCmsPage(name: {eq: "book"}) {
    id
    cover {
      gatsbyImageData(
          width: 800
          placeholder: BLURRED
        )
    }
    content {
      value
    }
    short 
  }
}

`