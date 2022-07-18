<template>
  <div>
    <Nav />
    <div class="container">
      <h1>Welcome to the Raptors floorball team</h1>
      <NuxtLink to="/events">View more event</NuxtLink>
    </div>
  </div>
</template>

<script>
  export default {
    async asyncData({ $strapi, store }) {
      try {
        const articles = await (await fetch(`${store.state.apiUrl}/articles?populate=*`)).json()

        return { articles: articles.data }
      } catch (error) {
        console.log(error)
      }
    },
  }
</script>

<style scoped>
.container {
  text-align: center;
  margin-top: 5rem;
}
</style>

