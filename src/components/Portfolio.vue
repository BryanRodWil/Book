<template>
  <div>
    <section class="px-4 md:px-8 pt-4">
      <div class="flex container mx-auto justify-center">
        <div class="flex flex-col justify-center">
          <div class="flex flex-wrap justify-center pl-8">
            <span v-for="(category,i) in categories" :key="i" @click="filter(category)" class="cursor-pointer text-sm mb-4 mr-8 px-4 py-2 rounded-full uppercase font-medium" :class="selectedCategory==category?'bg-primary text-white':''">{{category}}</span>
          </div>
        </div>
      </div>
    </section>

    <section class="px-4 md:px-8 pt-8 pb-4">
      <div class="flex container mx-auto">
        <div class="w-full">
          <div class="flex flex-wrap -mx-4">

            <g-link v-for="(project,i) in visibleProjects" :key="i" :to="project.node.path" class="px-4 pb-8 w-full sm:w-1/2 md:w-1/3">
              <div class="project-image bg-gray-light relative" :style="{padding:'50%', backgroundImage:'url(' + project.node.image + ')', backgroundRepeat:'no-repeat', backgroundPosition:'center'}">
                <div class="project-image__overlay absolute w-full h-full top-0 left-0">
                  <div class="flex w-full h-full justify-center items-center">
                    <div class="text-md font-bold text-center text-white">{{project.node.title}}</div>
                  </div>
                </div>
              </div>
            </g-link>

          </div>
        </div>
      </div>
    </section>
  </div>
</template>


<script>
export default {
  props: {
    items: {
      type: Array,
      default: []
    },
  },
  data(){
    return {
      selectedCategory:'ALL',
      categories: ['ALL','DIGITAL','PRINT','SKETCH','WEB'],
      entries: [
        {image:'/storyboard.jpg', category:'SKETCH', title:'Storyboard', slug:'storyboard'},
        {image:'/Japanese-Woman.jpg', category:'PRINT', title:'Japanese Woman', slug:'japanese-woman'},
        {image:'/Lemployeur-ideal.jpg', category:'WEB', title:'The ideal boss', slug:'the-ideal-boss'},
        {image:'/Prendre-sa-part.jpg', category:'PRINT', title:'Prendre sa part', slug:'prendre-sa-part'},
        {image:'/4LEPHANT.jpg', category:'PRINT', title:'4LEPHANT', slug: '4-lephant'},
        {image:'/Buddler.png', category:'DIGITAL', title:'Buddler', slug: 'buddler'},
      ]
    }
  },
  computed: {
    visibleProjects(){
      if(this.selectedCategory == 'ALL'){
        return this.items
      } else {
        return this.items.filter( project => project.node.category.id.toUpperCase() == this.selectedCategory.toUpperCase() )
      }
    }
  },
  methods:{
    filter(categoryName){
      this.selectedCategory = categoryName
    }
  }
}
</script>

<style>
.project-image .project-image__overlay {
  background-color: hsla(0, 0%, 0%, 0);
  visibility: hidden;
}
.project-image {
  background-size: 105%;
  animation-name: zoom-out;
  animation-duration: 1s;
  animation-fill-mode: forwards;
}
.project-image:hover {
  background-size: 125%;
  animation-name: zoom-in;
  animation-duration: 1s;
  animation-fill-mode: forwards;
}

@keyframes zoom-in {
  from { background-size: 105%; }
  to { background-size: 125%; }
}
@keyframes zoom-out {
  from { background-size: 125%; }
  to { background-size: 105%; }
}

.project-image:hover .project-image__overlay {
  background-color: hsla(0, 0%, 0%, 0.55);
  visibility: visible;
}
</style>
