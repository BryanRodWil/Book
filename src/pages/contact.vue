<template>
  <Layout>
    <nav class="px-4 md:px-8">
      <div class="container mx-auto">
        <Navbar />
      </div>
    </nav>

		<section class="px-4 md:px-8 bg-gray-light py-16">
      <div class="container mx-auto">
				<h1 class="text-5xl font-normal text-center">Contact</h1>
				<h4 class="text-gray-dark text-md font-light pb-6 text-center">You can reach me through any of these</h4>
      </div>
    </section>

		<section class="px-4 md:px-8 bg-white py-32">
      <div class="container mx-auto">

      <div class="flex flex-col md:flex-row-reverse items-center">

        <div class="flex md:flex-col md:w-2/5 mx-auto md:justify-between">

          <g-link class="text-lg md:text-sm text-center pb-8 flex items-center" to="/#" exact>
            <div class="w-16 h-16 flex rounded-full p-1 border-2 justify-center items-center">
              <SocialIcons class="text-primary" iconName="dribbble" width="30" height="30" />
            </div>
						<div class="text-center text-gray-dark pl-6">dribbble.com/BryanWilliart</div>
          </g-link>


          <g-link class="text-lg md:text-sm text-center pb-8 flex items-center" to="https://www.linkedin.com/in/bryan-williart-36437912a/" exact>
            <div class="w-16 h-16 flex rounded-full p-1 border-2 justify-center items-center">
              <SocialIcons class="text-primary" iconName="linkedin" width="30" height="30" />
            </div>
						<div class="text-center text-gray-dark pl-6">linkedin.com/in/bryan-williart</div>
          </g-link>

          <g-link class="text-lg md:text-sm text-center pb-8 flex items-center" to="/#" exact>
            <div class="w-16 h-16 flex rounded-full p-1 border-2 justify-center items-center">
              <SocialIcons class="text-primary" iconName="twitter" width="30" height="30" />
            </div>
						<div class="text-center text-gray-dark pl-6">twitter.com/bryan-williart</div>
          </g-link>

          <g-link class="text-lg md:text-sm text-center pb-8 flex items-center" to="https://www.instagram.com/bryanwilliart" exact>
            <div class="w-16 h-16 flex rounded-full p-1 border-2 justify-center items-center">
              <SocialIcons class="text-primary" iconName="instagram" width="30" height="30" />
            </div>
						<div class="text-center text-gray-dark pl-6">instagram.com/bryanwilliart</div>
          </g-link>

        </div>
      </div>



      </div>
    </section>


	</Layout>
</template>

<script>
import Navbar from "~/components/Navbar.vue"
import SocialIcons from '~/components/SocialIcons.vue';

export default {
  components:{ Navbar, SocialIcons },
  metaInfo: {
    title: 'Contact'
  },
  mounted(){
  }
}
</script>
