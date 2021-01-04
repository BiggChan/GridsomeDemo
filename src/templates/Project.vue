<template>
  <Layout>
    <div class="project" data-v-7f3c42a8="">
      <div class="container" data-v-7f3c42a8="">
        <div class="project-header" data-v-7f3c42a8="">
          <h1 class="project-title" data-v-7f3c42a8="">{{$page.project.Title}}</h1>
          <div class="project-info" data-v-7f3c42a8="">
            <div class="categories-container" data-v-7f3c42a8="">
              <div class="categories" data-v-7f3c42a8="">
                <span class="label" data-v-7f3c42a8="">Categories</span>
                <span class="category" data-v-7f3c42a8="">{{$page.project.Categories}}</span>
              </div>
            </div>
            <div class="year-container" data-v-7f3c42a8="">
              <span class="label" data-v-7f3c42a8="">Year</span>
              <div data-v-7f3c42a8="">{{$page.project.Year}}</div>
            </div>
          </div>
        </div>
        <div class="content" data-v-7f3c42a8="" v-html="mdToHtml($page.project.Content)">
        
        </div>
      </div>
    </div>
  </Layout>
</template>

<page-query>
query($id: ID!){
  project:strapiProjects(id:$id){
    id
    Title
    Categories
    Year
    Content
  }
}
</page-query>
<script>
import MarkdownIt from 'markdown-it'
const md = new MarkdownIt()
export default {
  name:'Project',
  methods: {
    mdToHtml (markdown) {
      return md.render(markdown)
    }
  },
  metaInfo () { 
    return {
      title: this.$page.project.Title
    }
  }
};
</script>

<style>
</style>