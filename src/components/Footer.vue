<template>
  <footer class="px-4 md:px-8 pb-6 pt-8 bg-gray-light">
    <div class="container mx-auto border-gray text-gray-dark text-sm">
      <div class="flex flex-col justify-center pb-16">

        <div class="flex justify-center">
          <g-link to="/" exact>
            <Logo class="my-16 md:my-8 text-primary" width="45" height="45" />
          </g-link>
        </div>

        <div class="flex flex-col md:flex-row md:justify-center">
          <g-link class="text-lg text-center pb-6 md:pb-0" to="/#" exact>About</g-link>
          <span class="text-lg px-8 invisible md:visible">|</span>
          <g-link class="text-lg text-center pb-6 md:pb-0" to="/portfolio" exact>Portfolio</g-link>
          <span class="text-lg px-8 invisible md:visible">|</span>
          <g-link class="text-lg text-center pb-6 md:pb-0" to="/#" exact>Contact</g-link>
        </div>

      </div>
      <div class="flex flex-col md:flex-row-reverse items-center">
        <div class="flex md:flex-row md:w-1/2 md:justify-end">
          <g-link class="text-lg md:text-sm text-center pb-6 md:pb-0" to="/#" exact>
            <div class="w-10 h-10 flex rounded-full p-1 border-2 justify-center items-center">
              <SocialIcons iconName="dribbble" width="20" height="20" />
            </div>
          </g-link>
          <g-link class="text-lg md:text-sm text-center pb-6 pl-6 md:pb-0" to="https://www.linkedin.com/in/bryan-williart-36437912a/" exact>
            <div class="w-10 h-10 flex rounded-full p-1 border-2 justify-center items-center">
              <SocialIcons iconName="linkedin" width="20" height="20" />
            </div>
          </g-link>
          <g-link class="text-lg md:text-sm text-center pb-6 pl-6 md:pb-0" to="/#" exact>
            <div class="w-10 h-10 flex rounded-full p-1 border-2 justify-center items-center">
              <SocialIcons iconName="twitter" width="20" height="20" />
            </div>
          </g-link>
          <g-link class="text-lg md:text-sm text-center pb-6 pl-6 md:pb-0" to="https://www.instagram.com/bryanwilliart" exact>
            <div class="w-10 h-10 flex rounded-full p-1 border-2 justify-center items-center">
              <SocialIcons iconName="instagram" width="20" height="20" />
            </div>
          </g-link>
        </div>
        <div class="pt-8 md:pt-0 w-full md:w-1/2 text-center md:text-left">© 2017 - {{new Date().getFullYear()}} Bryan Williart, all rights reserved.</div>
      </div>
    </div>
  </footer>
</template>

<script>
import Logo from '~/components/Logo.vue';
import SocialIcons from '~/components/SocialIcons.vue';

export default {
  components: {Logo,SocialIcons},  
}
</script>
