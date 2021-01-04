<template>
  <Layout>
    <div class="journal" data-v-2a0eef53="">
      <div class="container journal-container" data-v-2a0eef53="">
        <div class="journal-header" data-v-2a0eef53="">
          <h1 class="journal-title" data-v-2a0eef53="">
           {{ $page.journal.Title }}
          </h1>
          <div class="journal-meta" data-v-2a0eef53="">
            <div class="journal-author" data-v-2a0eef53="">
              <span class="label" data-v-2a0eef53="">Author</span
              ><span class="author-name" data-v-2a0eef53=""
                >{{ $page.journal.Author }}</span>
            </div>
            <div class="journal-date" data-v-2a0eef53="">
              <span class="label" data-v-2a0eef53="">Date</span>
              <div data-v-2a0eef53="">{{ $page.journal.Date }}</div>
            </div>
            <div class="journal-time" data-v-2a0eef53="">
              <span class="label" data-v-2a0eef53="">Time</span
              ><span data-v-2a0eef53="">{{ $page.journal.Time }}</span>
            </div>
          </div>
        </div>
        <div class="journal-content" data-v-2a0eef53="" v-html="mdToHtml($page.journal.Content)">
        </div>
      </div>
    </div>
  </Layout>
</template>
<page-query>
query($id: ID!){
  journal:strapiJournals(id:$id){
    id
    Title
    Content
    Date
    Time
    Author
  }
}
</page-query>
<script>
import MarkdownIt from 'markdown-it'
const md = new MarkdownIt()
export default {
  name:'Journal',
  methods: {
    mdToHtml (markdown) {
      return md.render(markdown)
    }
  },
  metaInfo () { 
    return {
      title: this.$page.journal.Title
    }
  }
};
</script>

<style>
</style>