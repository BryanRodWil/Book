<template>
  <Layout>

    <div class="px-4 md:px-8">
      <div class="container mx-auto">
        <Navbar />
      </div>
    </div>


    <div class="py-32 px-4 md:px-8">
      <div class="container mx-auto">
        <div class="max-w-sm">
          <h1 class="text-4xl pb-2 font-medium max-w-xl">{{ $page.portfolioSingle.title }}<span class="font-bold text-primary"> .</span></h1>
        </div>
      </div>
    </div>

    <div class="px-4 md:px-8 py-24">
      <div class="container mx-auto">
        <div class="flex flex-wrap">
          <div class="w-full sm:w-2/6 pb-24">
            <h4 class="font-bold text-2xl pb-6">Project Details</h4>
            <div class="flex pb-2">
              <div class="w-2/6 font-medium text-lg">Client:</div>
              <div class="w-4/6">{{$page.portfolioSingle.client}}</div>
            </div>
            <div class="flex pb-2">
              <div class="w-2/6 font-medium text-lg">Date:</div>
              <div class="w-4/6">{{$page.portfolioSingle.date}}</div>
            </div>
            <div class="flex pb-2">
              <div class="w-2/6 font-medium text-lg">Category:</div>
              <div class="w-4/6">{{$page.portfolioSingle.category.id}}</div>
            </div>
          </div>
          <div class="w-full sm:w-4/6">
            <div :class="false?'py-32':'py-0'" class="content text-justify leading-loose  text-lg text-blue-gray mx-auto" v-html="$page.portfolioSingle.content" />
          </div>
        </div>
      </div>
    </div>


    <div class="px-4 md:px-8 pb-16 md:pt-20 md:pb-48">
      <div class="container mx-auto">
        <div class="project-image bg-gray-light relative" :style="{padding:'30%', backgroundImage:'url(/' + $page.portfolioSingle.image + ')', backgroundRepeat:'no-repeat', backgroundSize:'105%', backgroundPosition:'center'}">
        </div>
      </div>
    </div>

  </Layout>
</template>

<page-query>
query PortfolioSingle ($path: String!) {
  portfolioSingle (path: $path) {
    title
    description
    date (format: "D MMMM, YYYY")
    image
    client
    category {
      id
    }
    content
  }
}
</page-query>

<script>
import Navbar from "~/components/Navbar.vue"

export default {
  components:{ Navbar },
  metaInfo () {
    return {
      title: this.$page.portfolioSingle.title
    }
  }
}
</script>
