<template>
  <div class="container">
    <h1 class="header">Post:</h1>
    <vs-card class="post">
      <template #title>
        <h1 class="title__header">{{ user.name }}</h1>
        <p>{{ user.email }}</p>
      </template>
      <template #text>
        <p class="post__text">{{ post.body }}</p>
      </template>
    </vs-card>
    <h1>Comments:</h1>
    <div class="input">
      <vs-input
        v-model="inputValue"
        placeholder="Comment"
        @keyup.enter="onEnterPress"
      ></vs-input>
    </div>
    <vs-card v-for="(comment, index) in comments" :key="index" class="post">
      <template #title>
        <h1 class="title__header">{{ comment.name }}</h1>
        <p>{{ comment.email }}</p>
      </template>
      <template #text>
        <p class="post__text">{{ comment.body }}</p></template
      >
    </vs-card>
  </div>
</template>

<script>
import {
  fetchComments,
  fetchPost,
  fetchUser,
  postComment,
} from "../api/fetchApi";

export default {
  name: "Info",
  data() {
    return {
      comments: null,
      user: null,
      post: null,
      inputValue: "",
    };
  },
  methods: {
    async onEnterPress() {
      await postComment(this.inputValue, this.$router.currentRoute.params.id);
      this.$vs.notification({ title: "Ur comment sended", text: "👍" });
    },
  },
  async mounted() {
    const noti = this.$vs.notification({ loading: true });
    this.user = await fetchUser(this.$router.currentRoute.params.id);
    this.post = await fetchPost(this.$router.currentRoute.params.id);
    this.comments = await fetchComments(this.$router.currentRoute.params.id);
    // noti.loading = false;
    noti.close()
  },
};
</script>

<style scoped>
.container {
  background-color: lightgray;
  padding: 50px;
}

.post {
  margin-bottom: 10px;
}

.header {
  margin-top: 0;
}

.title__header {
  margin-bottom: 0;
}

.post__text {
  margin-top: 10px;
  font-weight: 600;
}

.input {
  margin-bottom: 10px;
}
</style>
