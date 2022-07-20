<template>
  <div>
        <Nav />
      <h1 class="font-bold text-xl mb-2">Super awesome article for: {{article.Title}}</h1>
  </div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'App',
  data () {
    return {
      article: Object,
      error: null,
    }
  },
  async mounted() {
    const route = useRoute()
    try {
      // this is some hacked together shit because I don't know what I am doing
      console.log(route.params._id)
      const response = await axios.get('http://localhost:1337/api/articles?populate=*')
      this.article = response.data.data[route.params._id-1].attributes;
      console.log(this.article)
    } catch (error) {
      console.log(error)
    }
  }
}
</script>