<template>
  <Layout>

    <div class="px-4 md:px-8">
      <div class="container mx-auto">
        <Navbar />
      </div>
    </div>


    <div class="py-8 px-4 md:px-8">
      <div class="container mx-auto">
        <div class="max-w-sm">
          <h1 class="text-4xl pb-2 font-medium max-w-xl">{{ $page.portfolioSingle.title }}<span class="font-bold text-primary"> .</span></h1>
        </div>
      </div>
    </div>

    <!-- <div class="px-4 md:px-8 py-8">
      <div class="container mx-auto">
        <div class="bg-gray-light relative" :style="{padding:'50%', backgroundImage:'url(/' + $page.portfolioSingle.image + ')', backgroundRepeat:'no-repeat', backgroundSize:'105%', backgroundPosition:'center'}"></div>
      </div>
    </div> -->

    <div class="px-4 md:px-8 py-8">
      <div class="container mx-auto">

        <carousel :perPage="1">
          <slide v-for="(img,i) in $page.portfolioSingle.images" :key="i">
            <div class="bg-cover bg-no-repeat bg-center" :style="{paddingBottom:'70%', backgroundImage:'url(/' + img + ')'}"></div>
          </slide>
        </carousel>

      </div>
    </div>


    <div class="px-4 md:px-8 py-12">
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

  </Layout>
</template>

<page-query>
query PortfolioSingle ($path: String!) {
  portfolioSingle (path: $path) {
    title
    description
    date (format: "D MMMM, YYYY")
    image
    images
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
import { Carousel, Slide } from 'vue-carousel';

export default {
  components:{ Navbar, Carousel, Slide },
  metaInfo () {
    return {
      title: this.$page.portfolioSingle.title
    }
  }
}
</script>
