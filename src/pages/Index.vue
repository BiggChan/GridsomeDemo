<template>
  <Layout>
    <div class="container">
      <div class="hero">
        <h1 class="hero-title" @click="aa">Simplicity. Aesthetics. Value.</h1>
        <h2 class="hero-subtitle">
          Hi there, I'm an independent Digital Designer &amp; Art Director
          focused on digital design for brands that like to have fun.
        </h2>
      </div>
      <div class="projects">
        <div 
          class="project"
          v-for="project in $page.allStrapiProjects.projects"
          :key="project.node.id"
        >
          <g-link :to="project.node.path" class="project-link" style="text-align:center">
          <img
              :alt="project.node.Title"
              :src="GRIDSOME_API_URL+project.node.Image.url"
              width="2560"
              class="thumbnail g-image g-image--lazy g-image--loaded"
              sizes="(max-width: 2560px) 100vw, 2560px"
            /><noscript
              ><img
               :src="GRIDSOME_API_URL+project.node.Image.url"
                class="thumbnail g-image g-image--loaded"
                width="2560"
                :alt="project.node.Title"
            /></noscript>
            <h3 class="project-title">{{project.node.Title}}</h3>
            <div class="categories">
              <span class="category">{{project.node.Categories}}</span>
            </div></g-link>
        </div>
      </div>
    </div>
    <div data-v-460714ac="">
      <div class="latest-journals-heading container" data-v-460714ac="">
        <span class="label" data-v-460714ac="">Latest and greatest</span>
      </div>
      <div class="latest-journals" data-v-460714ac="">
        <div class="container" data-v-460714ac="">
          <g-link
            :to="journal.node.path"
            class="journal"
            data-v-460714ac=""
            v-for="journal in $page.allStrapiJournals.journals"
            :key="journal.node.id"
          >
            <h3 class="journal-title" data-v-460714ac="">
              {{ journal.node.Title }}
            </h3>
          </g-link>
        </div>
      </div>
    </div>
  </Layout>
</template>
<page-query>
query{
  allStrapiProjects{
    projects:edges{
      node{
        id
        Title
        Categories
        path
        Image{
          url
        }
      }
    }
  }

  allStrapiJournals{
    journals:edges{
      node{
        id
        Title
        path
      }
    }
  }
}
</page-query>
<script>
export default {
  metaInfo: {
    title: "Hello, world!",
  },
  methods:{
    aa(){
      console.log(this.posts);
    }
  }
};
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
