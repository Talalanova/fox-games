<template>
  <div class="comment">
    <div class="avatar">
      <img
        width="69"
        height="69"
        :src="getRandomArrayElement(someRandomNames).avatar"
      />
    </div>
    <div class="comment__content">
      <span class="comment__name">
        {{ name }}
      </span>
      <span class="comment__date">
        {{ date }}
      </span>
      <span class="comment__text">
        {{ text }}
      </span>
    </div>
  </div>
</template>

<script>
import { someRandomNames } from "@/data.js";

export default {
  name: "Comment",
  props: {
    date: String,
    name: String,
    text: String,
  },
  data() {
    return {
      someRandomNames,
    };
  },
  methods: {
    getRandomArrayElement(arr) {
      return arr[Math.floor(Math.random() * arr.length)];
    },
  },
};
</script>

<style scoped>
.comment {
  display: grid;
  grid-template-columns: 70px auto;
  column-gap: 15px;
}

.comment__content {
  font-family: "Nunito", "Arial", sans-serif;
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 650px;
  row-gap: 5px;
  padding: 10px 5px;
}

.comment__text {
  font-family: "Nunito", "Arial", sans-serif;
  grid-column: 1 / -1;
  font-size: 19px;
  color: #333333;
}

.comment__name {
  color: #333333;
  font-weight: 600;
  font-size: 21px;
  line-height: 22px;
}

.comment__date {
  text-align: right;
  font-size: 18px;
  color: #b6b6b6;
  font-weight: 300;
}

@media (max-width: 1440px) {
  .comment__content {
    column-gap: 0px;
  }
}
</style>