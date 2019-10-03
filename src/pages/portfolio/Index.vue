<template>
  <Layout>

    <div class="px-4 md:px-8">
      <div class="container mx-auto">
        <Navbar />
      </div>
    </div>
          
    <div class="py-16 px-4 md:px-8 bg-gray-light flex items-center">
      <div class="container mx-auto">
          <h1 class="text-4xl pb-2 text-center font-medium">{{ $page.portfolioHome.title }}</h1>
          <h4 class="text-center mx-auto text-md text-blue-gray">{{ $page.portfolioHome.description }}</h4>
      </div>
    </div>

    <div class="px-4 md:px-8 pt-16">
      <div class="container mx-auto">
        <Portfolio :items="$page.portfolioItems.edges" />
      </div>      
    </div>

  </Layout>
</template>

<page-query>
  query {
      portfolioItems: allPortfolioSingle(sortBy: "title", order: DESC, filter: { path: { ne: "/portfolio/index" }}) {
          edges {
            node {
              title
              image
              path
              category {
                id
              }
            }
          }
      }
    
      portfolioHome: portfolioSingle(path: "/portfolio/index") {
        title
        description
      }
  }
</page-query>

<script>
import Navbar from "~/components/Navbar.vue"
import Portfolio from "~/components/Portfolio.vue"

export default {
  components:{ Navbar, Portfolio },
  metaInfo () {
    return {
      title: 'Portfolio'
    }
  }
}
</script>
