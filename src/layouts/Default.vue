<template>
  <div class="text-black overflow-x-hidden" :class="isMenuOpened?'freeze-ui':''">
    
    <div class="offcanvas__menu absolute top-0 right-0 left-0 bottom-0 z-10" 
        :class="isMenuOpened?'offcanvas__menu--opened':'offcanvas__menu--closed'">
      <div class="flex flex-col h-full justify-center items-center">
          <g-link class="text-2xl font-medium text-center pb-12" @click.native="closeMenu()" to="/#" exact>About</g-link>
          <g-link class="text-2xl font-medium text-center pb-12" @click.native="closeMenu()" to="/portfolio" exact>Portfolio</g-link>
          <g-link class="text-2xl font-medium text-center pb-12" @click.native="closeMenu()" to="/contact" exact>Contact</g-link>
          <!-- <g-link class="text-2xl font-medium text-center pb-12" @click.native="closeMenu()" to="/blog" exact>Blog</g-link> -->
      </div>
    </div>

    <slot/>

    <Footer />

  </div>
</template>

<static-query>
query {
  metaData {
    siteName
  }
}
</static-query>

<script>
import { EventBus } from '~/event-bus.js';
import Footer from "~/components/Footer.vue"

export default {
  components: { Footer },
  data () {
    return {
      isMenuOpened: false,
    }
  },
  mounted () {
    EventBus.$on('CLOSE_MENU', payload => {
      this.isMenuOpened = false
    })
    EventBus.$on('TOGGLE_MENU', payload => {
      this.isMenuOpened = !this.isMenuOpened
    })
  },
  methods:{
    closeMenu(){
      EventBus.$emit('CLOSE_MENU')
    }
  }
}
</script>


<style>
.offcanvas__menu {
  background-color: hsla(0,100%,100%,.9);
}
.offcanvas__menu--closed {
  transform: translateY(-120%)
}
.offcanvas__menu--opened {
  transform: translateY(0%)
}

/* @media (min-width: 640px){
  .offcanvas__menu {
    display: none;
  }
} */

/* @media (max-width: 640px){ */
  .freeze-ui {
    height: 100vh;
    overflow: hidden;
  }
  .freeze-ui .hamburger .bar-1{
    transform: rotate(-45deg) translate(-4px, 5px);
  }
  .freeze-ui .hamburger .bar-2{
    padding: 0;
  }
  .freeze-ui .hamburger .bar-3{
    transform: rotate(45deg) translate(-4px, -5px);
  }
/* } */
</style>