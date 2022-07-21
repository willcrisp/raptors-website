<template>
<v-row>
  <v-col>
  <!-- we will change the id to be like the name + something so users will see   /articles/raptorsWinGame vs /articles/123-3214345-7-4564564-1 -->
  <div>your article id is{{$route.params.id}}</div>
  <div>{{article}}</div>
  </v-col>
</v-row>
</template>

<script>
export default {
  //Async will block user nav until this call finishes.
  //We can show the user a load bar or something if we expect it to be a phat one
  async asyncData({ store, route }) {
    let article = await store.dispatch('articles/getArticle', route.params.id)
    //everthing you return from here is then available with this.article. It puts it into 'data'
    return { article }
  },
  data() {
    return {
      key: 'blah'
    }
  },
  mounted() {
  },
}
</script>

<style></style>
