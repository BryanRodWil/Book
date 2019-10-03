<template>
  <Layout>
    <nav class="px-4 md:px-8">
      <div class="container mx-auto">
        <Navbar />
      </div>
    </nav>

    <section class="px-4 md:px-8 bg-gray-light py-32">
      <div class="container mx-auto">
        <h4 class="uppercase text-gray-dark text-sm font-bold pb-6">{{$page.homePage.title}}</h4>
        <h1 class="text-4xl font-light max-w-2xl">Hi! <span class="text-primary font-normal">I'm Bryan</span>{{$page.homePage.description}}</h1>
      </div>
    </section>

    <section class="px-4 md:px-8 bg-white pt-20">
      <div class="flex container mx-auto justify-center">
        <div class="flex flex-col justify-center">
          <h2 class="text-3xl font-bold text-center pb-4"><span class="font-light">My</span> Work</h2>
          <div class="mx-auto h-2px bg-primary w-12 mb-16"></div>
        </div>
      </div>
    </section>

    <Portfolio :items="$page.portfolioItems.edges" />

    <section class="px-4 md:px-8 bg-white pt-8 pb-32">
      <div class="flex container mx-auto justify-center">
        <g-link to="/portfolio" class="flex flex-col justify-center">
          <span class="rounded-full bg-primary py-3 px-6 text-white">More work</span>
        </g-link>
      </div>
    </section>

  </Layout>
</template>

<page-query>
  query {
      homePage: pageContent (path: "/index") {
        title
        description
      }
      portfolioItems: allPortfolioSingle(sortBy: "title", order: DESC, limit: 6, filter: { path: { ne: "/portfolio/index" }}) {
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
  }
</page-query>

<script>
import Navbar from "~/components/Navbar.vue"
import Portfolio from "~/components/Portfolio.vue"

export default {
  components:{ Navbar, Portfolio },
  metaInfo: {
    title: 'Home'
  },
  mounted(){
    console.log(this.$page.portfolio.edges)
  }
}
</script>

<style scoped>
</style>
