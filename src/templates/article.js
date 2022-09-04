import { graphql } from 'gatsby'
import { StructuredText } from 'react-datocms';
import React from 'react'
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import Layout from '../components/layout';




const article = (props) => {

    const image = getImage(props.data.datoCmsArticle.cover)

    
  return (
    <Layout>
    <div className=" bg-lightblue">
        {props.data.datoCmsArticle.title}
        <div>
        <StructuredText data={props.data.datoCmsArticle.body} />
        <GatsbyImage image={image} alt="cover" />
        </div>
    </div>
    
    </Layout>
    
  )
}

export default article

export const query = graphql`
query ArticleQuery($articleId:String) {
    datoCmsArticle(originalId: {eq: $articleId}) {
        title
        slug
        body {
          blocks
          links
          value
        }
        cover {
            gatsbyImageData(
                width: 200
                placeholder: BLURRED
              )
          }
    }
  }
  
`