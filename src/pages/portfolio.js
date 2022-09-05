import * as React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const PortfoliosPage = (props) => {
 
  return (
  <Layout>
    <div className="flex flex-col justify-center items-center w-full h-full">
    <h2 className="text-2xl md:text-7xl font-black hover:text-black my-5">Selected Projects</h2>
    <p className="text-lg">soon...</p>




</div>
  </Layout>
)}

export const Head = () => <Seo title="Page two" />

export default PortfoliosPage

export const query = graphql`
query PortfolioQuery {
  allDatoCmsPortfolio {
    nodes {
      originalId
      slug
      title
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
    }
  }
}
`
