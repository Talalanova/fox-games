<template>
  <ul class="pagination">
    <li class="page-item">
      <button
        type="button"
        class="page-link"
        v-if="currentPage != 1"
        @click="pageAdd('-')"
      >
        Предыдущая
      </button>
    </li>
    <li class="page-item">
      <button
        type="button"
        @click="pageAdd(pageNumber)"
        :class="[
          currentPage === pageNumber
            ? 'page-link page-link--active'
            : 'page-link',
        ]"
        v-for="pageNumber in pages.slice(
          currentPage - 1,
          currentPage + pagesSeen
        )"
        :key="pageNumber"
      >
        {{ pageNumber }}
      </button>
    </li>
    <li class="page-item">
      <button
        type="button"
        @click="pageAdd('+')"
        v-if="currentPage < pages.length"
        class="page-link"
      >
        Следующая
      </button>
    </li>
  </ul>
</template>

<script>
export default {
  name: "Pagination",
  data() {
    return {
      totalProducts: Number,
      currentPage: 1,
      pages: [],
      pagesSeen: 5,
    };
  },
  props: {
    perPage: Number,
    page: Number,
    totalGoods: Number,
  },
  emits: ["updatePage"],
  methods: {
    pageAdd(op) {
      if (op == "+") this.currentPage++;
      else if (op == "-") this.currentPage--;
      else this.currentPage = op;
      this.$emit("updatePage", this.currentPage);
    },
    setPages() {
      let numberOfPages = Math.ceil(this.totalProducts / this.perPage);
      for (let index = 1; index <= numberOfPages; index++) {
        this.pages.push(index);
      }
    },
  },
  mounted() {
    this.currentPage = this.page;
    this.pagesSeen = this.perPage;
    this.totalProducts = this.totalGoods;
    this.setPages();
  },
};
</script>

<style scoped>
button.page-link {
  display: inline-block;
  color: #333333;
  border: 1px solid #cb7d49;
  background-color: white;
  padding: 5px;
  border-radius: 4px;
  margin-right: 12px;
  font-size: 20px;
  font-weight: 500;
  cursor: pointer;
}

button.page-link:hover {
  background-color: #cb7d49;
  color: white;
}

button.page-link--active {
  background-color: #cb7d49;
  color: white;
}
.offset {
  width: 500px !important;
  margin: 20px auto;
}

.pagination {
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: row;
  margin: 40px 0 0 0;
  justify-content: center;
}
</style>