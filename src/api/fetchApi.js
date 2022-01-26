import axios from "axios";

export const fetchPosts = async () => {
  const { data } = await axios.get(
    "https://jsonplaceholder.typicode.com/posts"
  );
  return data;
};

export const fetchUser = async (id) => {
  id = id > 10 ? Math.trunc(id / 10) : id;
  const { data } = await axios.get(
    `https://jsonplaceholder.typicode.com/users/${id}`
  );
  return data;
};

export const fetchPost = async (id) => {
  const { data } = await axios.get(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );
  return data;
};

export const fetchComments = async (id) => {
  const { data } = await axios.get(
    `https://jsonplaceholder.typicode.com/posts/${id}/comments`
  );
  return data;
};

export const postComment = async (value, id) => {
  const { data } = await axios.post(
    `https://jsonplaceholder.typicode.com/comments`,
    {
      body: value,
      postId: id,
    }
  );
  return data;
};
