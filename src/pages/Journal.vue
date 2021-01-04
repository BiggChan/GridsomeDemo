<template>
  <Layout>
    <div class="container" data-v-da896d1e="">
      <div class="journal-hero" data-v-da896d1e="">
        <h1 class="journal-header" data-v-da896d1e="">
          a wise person once said...
        </h1>
      </div>
    </div>
    <g-link
    v-for="journal in $page.allStrapiJournals.journals"
    :key="journal.node.id"
      :to="journal.node.path"
      class="journal-post"
      data-v-da896d1e=""
      ><div class="container journal" data-v-da896d1e="">
        <h2 class="journal-title" data-v-da896d1e="">
          {{journal.node.Title}}
        </h2>
        <p class="journal-excerpt" data-v-da896d1e="">
          {{journal.node.Categories}}
        </p>
      </div></g-link>
  </Layout>
</template>
<page-query>
query{
  allStrapiJournals{
    journals:edges{
      node{
        id
        Title
        Categories
        path
      }
    }
  }
}
</page-query>
<script>
export default {
  data() {
    return {};
  },
  created() {},
  mounted() {},
  methods: {},
};
</script>
<style lang="scss" scoped></style>
