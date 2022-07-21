<template>
  <div>
    <Nav />
    <h1 class="font-bold text-xl mb-2">
      Super awesome article for: {{ article.Title }}
    </h1>
    <div
      class="img-cont h-full overflow-hidden rounded-xl col-start-1 col-end-3"
    >
      <!-- fetch media from strapi using the STRAPI_URL + relative image URL -->
      <img :src="coverImageUrl" alt="" />
    </div>
    <p>{{ article.Content }}</p>
  </div>
</template>

<script>
export default {
  async asyncData({ store, route }) {
    console.log(route.params.id)
  },
  data() {
    return {
      article: Object,
      error: null,
    };
  },
  async mounted() {
    // const route = useRoute()
    // try {
    //   // this is some hacked together shit because I don't know what I am doing
    //   const response = await axios.get('http://localhost:1337/api/articles?populate=*')
    //   this.article = response.data.data[route.params._id-1].attributes;
    //   console.log(this.article)
    // } catch (error) {
    //   console.log(error)
    // }
  },
};
</script>
