<template>
  <Layout>
    <div class="container">
      <div class="hero">
        <img
              :src="GRIDSOME_API_URL+$page.logo.image.url"
              alt="Nichlas W. Andersen"
              :class="$page.logo"
              @click="showLogo()"
          />
        <h1 class="hero-title" @click="aa">Simplicity. Aesthetics. Value.</h1>
        <h2 class="hero-subtitle">
          Hi there, I'm an independent Digital Designer &amp; Art Director
          focused on digital design for brands that like to have fun.
        </h2>
      </div>
      <div class="projects">
        <div class="project">
          <a href="/projects/chelsea-landmark/" class="project-link"
            ><img
              alt="Banana"
              src="/assets/static/mike-dorner-173502-unsplash.c0dad42.16e7958f24c375d7bd7b08073b4ce000.jpg"
              width="2560"
              data-src="/assets/static/mike-dorner-173502-unsplash.c0dad42.16e7958f24c375d7bd7b08073b4ce000.jpg"
              data-srcset="/assets/static/mike-dorner-173502-unsplash.b6e36c6.16e7958f24c375d7bd7b08073b4ce000.jpg 480w, /assets/static/mike-dorner-173502-unsplash.1c9e94c.16e7958f24c375d7bd7b08073b4ce000.jpg 1024w, /assets/static/mike-dorner-173502-unsplash.f11e5e1.16e7958f24c375d7bd7b08073b4ce000.jpg 1920w, /assets/static/mike-dorner-173502-unsplash.c0dad42.16e7958f24c375d7bd7b08073b4ce000.jpg 2560w"
              data-sizes="(max-width: 2560px) 100vw, 2560px"
              class="thumbnail g-image g-image--lazy g-image--loaded"
              srcset="
                /assets/static/mike-dorner-173502-unsplash.b6e36c6.16e7958f24c375d7bd7b08073b4ce000.jpg  480w,
                /assets/static/mike-dorner-173502-unsplash.1c9e94c.16e7958f24c375d7bd7b08073b4ce000.jpg 1024w,
                /assets/static/mike-dorner-173502-unsplash.f11e5e1.16e7958f24c375d7bd7b08073b4ce000.jpg 1920w,
                /assets/static/mike-dorner-173502-unsplash.c0dad42.16e7958f24c375d7bd7b08073b4ce000.jpg 2560w
              "
              sizes="(max-width: 2560px) 100vw, 2560px"
            /><noscript
              ><img
                src="/assets/static/mike-dorner-173502-unsplash.c0dad42.16e7958f24c375d7bd7b08073b4ce000.jpg"
                class="thumbnail g-image g-image--loaded"
                width="2560"
                alt="Banana"
            /></noscript>
            <h3 class="project-title">Banana</h3>
            <div class="categories">
              <span class="category">photography</span
              ><span class="category">pink</span>
            </div></a
          >
        </div>
        <div class="project">
          <a href="/projects/sunk/" class="project-link"
            ><img
              alt="Pineapple"
              src="/assets/static/cody-davis-253925-unsplash.c0dad42.ce547449449f5efa1a8b8f02c7abb04d.jpg"
              width="2560"
              data-src="/assets/static/cody-davis-253925-unsplash.c0dad42.ce547449449f5efa1a8b8f02c7abb04d.jpg"
              data-srcset="/assets/static/cody-davis-253925-unsplash.b6e36c6.ce547449449f5efa1a8b8f02c7abb04d.jpg 480w, /assets/static/cody-davis-253925-unsplash.1c9e94c.ce547449449f5efa1a8b8f02c7abb04d.jpg 1024w, /assets/static/cody-davis-253925-unsplash.f11e5e1.ce547449449f5efa1a8b8f02c7abb04d.jpg 1920w, /assets/static/cody-davis-253925-unsplash.c0dad42.ce547449449f5efa1a8b8f02c7abb04d.jpg 2560w"
              data-sizes="(max-width: 2560px) 100vw, 2560px"
              class="thumbnail g-image g-image--lazy g-image--loaded"
              srcset="
                /assets/static/cody-davis-253925-unsplash.b6e36c6.ce547449449f5efa1a8b8f02c7abb04d.jpg  480w,
                /assets/static/cody-davis-253925-unsplash.1c9e94c.ce547449449f5efa1a8b8f02c7abb04d.jpg 1024w,
                /assets/static/cody-davis-253925-unsplash.f11e5e1.ce547449449f5efa1a8b8f02c7abb04d.jpg 1920w,
                /assets/static/cody-davis-253925-unsplash.c0dad42.ce547449449f5efa1a8b8f02c7abb04d.jpg 2560w
              "
              sizes="(max-width: 2560px) 100vw, 2560px"
            /><noscript
              ><img
                src="/assets/static/cody-davis-253925-unsplash.c0dad42.ce547449449f5efa1a8b8f02c7abb04d.jpg"
                class="thumbnail g-image g-image--loaded"
                width="2560"
                alt="Pineapple"
            /></noscript>
            <h3 class="project-title">Pineapple</h3>
            <div class="categories">
              <span class="category">photography</span
              ><span class="category">blue</span>
            </div></a
          >
        </div>
        <div class="project">
          <a href="/projects/3d-graff/" class="project-link"
            ><img
              alt="Ice Cream"
              src="/assets/static/ian-dooley-281897-unsplash.c0dad42.4ee4f858cbb8392c2cc4019598c07dcd.jpg"
              width="2560"
              data-src="/assets/static/ian-dooley-281897-unsplash.c0dad42.4ee4f858cbb8392c2cc4019598c07dcd.jpg"
              data-srcset="/assets/static/ian-dooley-281897-unsplash.b6e36c6.4ee4f858cbb8392c2cc4019598c07dcd.jpg 480w, /assets/static/ian-dooley-281897-unsplash.1c9e94c.4ee4f858cbb8392c2cc4019598c07dcd.jpg 1024w, /assets/static/ian-dooley-281897-unsplash.f11e5e1.4ee4f858cbb8392c2cc4019598c07dcd.jpg 1920w, /assets/static/ian-dooley-281897-unsplash.c0dad42.4ee4f858cbb8392c2cc4019598c07dcd.jpg 2560w"
              data-sizes="(max-width: 2560px) 100vw, 2560px"
              class="thumbnail g-image g-image--lazy g-image--loaded"
              srcset="
                /assets/static/ian-dooley-281897-unsplash.b6e36c6.4ee4f858cbb8392c2cc4019598c07dcd.jpg  480w,
                /assets/static/ian-dooley-281897-unsplash.1c9e94c.4ee4f858cbb8392c2cc4019598c07dcd.jpg 1024w,
                /assets/static/ian-dooley-281897-unsplash.f11e5e1.4ee4f858cbb8392c2cc4019598c07dcd.jpg 1920w,
                /assets/static/ian-dooley-281897-unsplash.c0dad42.4ee4f858cbb8392c2cc4019598c07dcd.jpg 2560w
              "
              sizes="(max-width: 2560px) 100vw, 2560px"
            /><noscript
              ><img
                src="/assets/static/ian-dooley-281897-unsplash.c0dad42.4ee4f858cbb8392c2cc4019598c07dcd.jpg"
                class="thumbnail g-image g-image--loaded"
                width="2560"
                alt="Ice Cream"
            /></noscript>
            <h3 class="project-title">Ice Cream</h3>
            <div class="categories">
              <span class="category">photography</span
              ><span class="category">yellow</span>
            </div></a
          >
        </div>
        <div class="project">
          <a href="/projects/ios-concept/" class="project-link"
            ><img
              alt="Porta400"
              src="/assets/static/markus-spiske-516263-unsplash.c0dad42.5fc4651133067e67284df56f3d81be2d.jpg"
              width="2560"
              data-src="/assets/static/markus-spiske-516263-unsplash.c0dad42.5fc4651133067e67284df56f3d81be2d.jpg"
              data-srcset="/assets/static/markus-spiske-516263-unsplash.b6e36c6.5fc4651133067e67284df56f3d81be2d.jpg 480w, /assets/static/markus-spiske-516263-unsplash.1c9e94c.5fc4651133067e67284df56f3d81be2d.jpg 1024w, /assets/static/markus-spiske-516263-unsplash.f11e5e1.5fc4651133067e67284df56f3d81be2d.jpg 1920w, /assets/static/markus-spiske-516263-unsplash.c0dad42.5fc4651133067e67284df56f3d81be2d.jpg 2560w"
              data-sizes="(max-width: 2560px) 100vw, 2560px"
              class="thumbnail g-image g-image--lazy g-image--loaded"
              srcset="
                /assets/static/markus-spiske-516263-unsplash.b6e36c6.5fc4651133067e67284df56f3d81be2d.jpg  480w,
                /assets/static/markus-spiske-516263-unsplash.1c9e94c.5fc4651133067e67284df56f3d81be2d.jpg 1024w,
                /assets/static/markus-spiske-516263-unsplash.f11e5e1.5fc4651133067e67284df56f3d81be2d.jpg 1920w,
                /assets/static/markus-spiske-516263-unsplash.c0dad42.5fc4651133067e67284df56f3d81be2d.jpg 2560w
              "
              sizes="(max-width: 2560px) 100vw, 2560px"
            /><noscript
              ><img
                src="/assets/static/markus-spiske-516263-unsplash.c0dad42.5fc4651133067e67284df56f3d81be2d.jpg"
                class="thumbnail g-image g-image--loaded"
                width="2560"
                alt="Porta400"
            /></noscript>
            <h3 class="project-title">Porta400</h3>
            <div class="categories">
              <span class="category">photography</span
              ><span class="category">yellow</span>
            </div></a
          >
        </div>
      </div>
    </div>
    <div data-v-460714ac="">
      <div class="latest-journals-heading container" data-v-460714ac="">
        <span class="label" data-v-460714ac="">Latest and greatest</span>
      </div>
      <div class="latest-journals" data-v-460714ac="">
        <div class="container" data-v-460714ac="">
          <a
            href="/journal/gridsome-forestry-cms/"
            class="journal"
            data-v-460714ac=""
            ><h3 class="journal-title" data-v-460714ac="">
              Gridsome with Forestry CMS
            </h3></a
          ><a
            href="/journal/use-gridsome-vuejs/"
            class="journal"
            data-v-460714ac=""
            ><h3 class="journal-title" data-v-460714ac="">
              VueJS for your next project
            </h3></a
          ><a
            href="/journal/macos-development-environment/"
            class="journal"
            data-v-460714ac=""
            ><h3 class="journal-title" data-v-460714ac="">
              macOS development environment
            </h3></a
          ><a
            href="/journal/a-journal-entry/"
            class="journal"
            data-v-460714ac=""
            ><h3 class="journal-title" data-v-460714ac="">
              About Typography
            </h3></a
          >
        </div>
      </div>
    </div>
  </Layout>
</template>
<page-query>
query{
  allStrapiProjects{
    edges{
      node{
        id
        Title
      }
    }
  }
  logo:strapiLogo(id:1){
    image{
      url
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
