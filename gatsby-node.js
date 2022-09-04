

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions
  createPage({
    path: "/using-dsg",
    component: require.resolve("./src/templates/using-dsg.js"),
    context: {},
    defer: true,
  })

  const result = await graphql(`
  { allDatoCmsArticle {
    nodes {
      title
      body {
        value
      }
      originalId
      slug
      published
    }
  }
  }`)

  result.data.allDatoCmsArticle.nodes.forEach(article => {
    createPage({
      path: `/articles/${article.slug}`,
      component: require.resolve("./src/templates/article.js"),
      context: {
        articleId:article.originalId,
        title: article.title
      }
    })
  
  });



  // create portfolio pages

  const portfolioResult = await graphql(`
  {
    allDatoCmsPortfolio {
      nodes {
        id
        originalId
        title
        slug
      }
    }
  }
  `)


  portfolioResult.data.allDatoCmsPortfolio.nodes.forEach(portfolioItem => {
    console.log("CREATING PAGE for ",portfolioItem.slug)
    createPage({
      path: `/portfolio/${portfolioItem.slug}`,
      component: require.resolve("./src/templates/portfolio.js"),
      context: {
        portfolioId:portfolioItem.originalId,
        title: portfolioItem.title
      }
    })
  
  });

 

}
