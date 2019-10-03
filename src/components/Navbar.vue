<template>
  <div class="flex justify-center items-center py-8">
    <div class="flex mr-auto items-baseline" >
      <g-link class="z-50" @click.native="closeMenu()" to="/" exact>
        <Logo class="text-primary" width="35" height="35" />
      </g-link>
    </div>
    <div class="hamburger items-center flex flex-col z-50 cursor-pointer" @click="toggleMenu()">
      <div class="bar-1 rounded px-3 my-2px h-2px bg-black"></div>
      <div class="bar-2 rounded px-3 my-2px h-2px bg-black"></div>
      <div class="bar-3 rounded px-3 my-2px h-2px bg-black"></div>
    </div>
  </div>
</template>

<script>
import { EventBus } from '~/event-bus.js';
import Logo from '~/components/Logo.vue';

export default {
  components: {Logo},
  methods: {
    toggleMenu(){
      EventBus.$emit('TOGGLE_MENU')
    },
    closeMenu(){
      EventBus.$emit('CLOSE_MENU')
    },
  }  
}
</script>