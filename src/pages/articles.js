import * as React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const ArticlesPage = (props) => {
  console.log(props)
  return (
  <Layout>
    <h1>List of articles</h1>

    {props.data.allDatoCmsArticle.nodes.map((article)=>{
      return (<div><Link to={`/articles/${article.slug}`}>{article.title}</Link></div>)
    })}
    
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)}

export const Head = () => <Seo title="Page two" />

export default ArticlesPage

export const query = graphql`
query ArticlesQuery {
  allDatoCmsArticle {
    nodes {
      originalId
      slug
      title
    }
  }
}
`
