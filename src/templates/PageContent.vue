<template>
  <Layout>
    <div class="px-4 md:px-8 pb-24 main-content">

      <div class="container mx-auto min-h-screen">
        <Navbar />

        <article :class="!$page.pageContent.override_default_template?'pt-24':'py-0'">
          <h1 v-if="!$page.pageContent.override_default_template" class="text-4xl pb-6 text-center font-medium">{{ $page.pageContent.title }}</h1>

          <h4 v-if="!$page.pageContent.override_default_template" class="text-center mx-auto text-2xl text-blue-gray">{{ $page.pageContent.description }}</h4>

          <div :class="!$page.pageContent.override_default_template?'py-32':'py-0'" class="content text-justify leading-relaxed text-xl text-blue-gray mx-auto" v-html="$page.pageContent.content" />
        </article>
      </div>
      
    </div>

  </Layout>
</template>

<page-query>
query PageContent ($path: String!) {
    pageContent (path: $path) {
      override_default_template
      title
      description
      date (format: "D MMMM, YYYY")
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
      title: this.$page.pageContent.title
    }
  }
}
</script>

<style scoped>

/* @media (max-width: 640px){
  main-content {
    background-position: top; 
    background-size: contain; 
    background-repeat: no-repeat; 
    background-image: url('~/assets/camera_vision_background_small.svg');
  }
} */


.content >>> h1, .content >>> h2, .content >>> h3, 
.content >>> h4,.content >>> h5,.content >>> h6,
.content >>> p, 
.content >>> hr,
.content >>> table, 
.content >>> ul, .content >>> ol, 
.content >>> pre {
  max-width: 780px;
  margin-left: auto;
  margin-right: auto;
}

.content >>> table,
.content >>> ul, .content >>> ol,
.content >>> pre, .content >>> p {
  margin-bottom: 1.5rem;
}


.content >>> h1 { font-size: 3rem; color: #3F3D56; text-align:center; font-weight: 500; padding-top: 2rem; padding-bottom: 1.5rem; }
.content >>> h2 { font-size: 40px; color: #3F3D56; text-align:left; font-weight: 500; padding-top: 3rem; padding-bottom: 0.8rem; }
.content >>> h3 { font-size: 36px; color: #3F3D56; text-align:left; font-weight: 500; padding-top: 3rem; padding-bottom: 0.8rem; }
.content >>> h4 { font-size: 28px; color: #3F3D56; text-align:left; font-weight: 500; padding-top: 3rem; padding-bottom: 0.8rem; }
.content >>> h5 { font-size: 21px; color: #3F3D56; text-align:left; font-weight: 500; padding-top: 3rem; padding-bottom: 0.8rem; }
.content >>> h6 { font-size: 18px; color: #3F3D56; text-align:left; font-weight: 500; padding-top: 3rem; padding-bottom: 0.8rem; }

.content >>> hr {
  overflow: visible; /* For IE */
  padding: 0;
  border: none;
  text-align: center;
  margin-top: 3em;
  margin-bottom: 3em;
}

.content >>> hr::after {
  /* content: '* ✱ * * ❋'; */
  /* content: '❋  ❋  ❋'; */
  content: '*  *  *';
  display: inline-block;
}

.content >>> img {
  max-width: 100%;
  margin-top: 3em;
  margin-bottom: 3em;
}

.content >>> a {
  text-decoration: underline;
}

.content >>> blockquote {
  padding: 2rem;
  text-align: center;
  font-size: 2rem;
  font-style: italic;
}

.content >>> pre {
  padding: 1em;
  border-radius: 3px;
  background-color: hsl(0,0%,95%);
  font-size: 16px;
}
.content >>> pre>code {
  padding: 0;
  border-radius: 0;
  border-width: 0;
}



.content >>> ul, .content >>> ol {
  padding-left: 1.3rem;
}
.content >>> ul>li {
  list-style: disc;
}
.content >>> ol>li {
  list-style: decimal;
}

.content >>> table {
  margin-top: 2rem;
  margin-bottom: 2rem;

}

.content >>> table>thead>tr>th {
  vertical-align: bottom;
  border-bottom: 2px solid #dee2e6;
  padding: .75rem;
  border-top: 1px solid #dee2e6;
  text-align: inherit;
}
.content >>> table>tbody>tr>th {
  padding: .75rem;
  vertical-align: top;
  border-top: 1px solid #dee2e6;
  text-align: inherit;
  font-weight: bold;
}

.content >>> table>tbody>tr>td {
  padding: .75rem;
  vertical-align: top;
  border-top: 1px solid #dee2e6;
}

.content >>> code {
  padding: 0.1rem 0.4rem;
  border-color: hsl(0,0%,90%);
  border-width: 1px;
  border-radius: 3px;
  background-color: hsl(0,0%,95%);
  font-size: 16px;
}

</style>
