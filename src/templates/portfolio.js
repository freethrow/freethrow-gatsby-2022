import { graphql } from 'gatsby'
import { StructuredText } from 'react-datocms';
import React from 'react'
import { GatsbyImage, getImage } from "gatsby-plugin-image"


const portfolioItem = (props) => {


    console.log("Props passed to portfoliojs",props)

    const image = getImage(props.data.datoCmsPortfolio.cover)


    
  return (
    <div className=" bg-lightblue">
        {props.data.datoCmsPortfolio.title}
        <div>
        <StructuredText data={props.data.datoCmsPortfolio.description} />
        <GatsbyImage image={image} alt="cover" />
        </div>
    </div>
    
  )
}

export default portfolioItem

export const query = graphql`
query PortfoliosQuery($portfolioId:String) {
    datoCmsPortfolio(originalId: {eq: $portfolioId}) {
        title
        slug
        description {
          blocks
          links
          value
        }
        cover {
            gatsbyImageData(
                width: 1200
                placeholder: BLURRED
              )
          }
    }
  }
  
`