<template>
  <div class="container">
    <vs-card
      v-for="(post, index) in posts"
      :key="index"
      class="item"
      @click="$router.push(`/post/${index + 1}`)"
    >
      <template #title>
        <h2>Post: {{ post.id }}</h2>
      </template>
      <template #text>
        <p>{{ post.title }}</p>
      </template>
    </vs-card>
  </div>
</template>

<script>
import { fetchPosts } from "../api/fetchApi";

export default {
  name: "Posts",
  data() {
    return {
      posts: null,
    };
  },
  async mounted() {
    const noti = this.$vs.notification({ loading: true });
    this.posts = await fetchPosts();
    noti.close();
  },
};
</script>

<style scoped>
.container {
  background-color: #131313;
  padding-top: 10px;
}
.item:not(:last-child) {
  margin-bottom: 10px;
}
</style>
