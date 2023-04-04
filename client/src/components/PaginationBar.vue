<template>
  <div class="pagination-bar">
    <div class="page-numbers">
      <router-link
        :to="{ name: 'browseGames', query: { page: currentPage - 1 } }"
        v-if="currentPage > 1"
      >
        Previous
      </router-link>
      <span v-for="pageNumber in visiblePages" :key="pageNumber">
        <router-link
          :to="{ name: 'browseGames', query: { page: pageNumber } }"
          :class="{ 'current-page': pageNumber === currentPage }"
        >
          {{ pageNumber }}
        </router-link>
      </span>
      <router-link
        :to="{ name: 'browseGames', query: { page: currentPage + 1 } }"
        v-if="currentPage < totalPages"
      >
        Next
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "PaginationBar",
  props: {
    currentPage: Number,
    totalPages: Number,
    maxVisiblePages: {
      type: Number,
      default: 5,
    },
  },
  computed: {
    visiblePages() {
      const leftOffset = Math.floor(this.maxVisiblePages / 2);
      const rightOffset = this.maxVisiblePages - leftOffset - 1;
      let startPage = this.currentPage - leftOffset;
      let endPage = this.currentPage + rightOffset;

      if (startPage < 1) {
        startPage = 1;
        endPage = Math.min(this.totalPages, this.maxVisiblePages);
      }

      if (endPage > this.totalPages) {
        endPage = this.totalPages;
        startPage = Math.max(1, this.totalPages - this.maxVisiblePages + 1);
      }

      return Array(endPage - startPage + 1)
        .fill()
        .map((_, i) => startPage + i);
    },
  },
  methods: {
    goToPage(pageNumber) {
      this.$router.push({ name: "browseGames", params: { page: pageNumber } });
    },
  },
};
</script>

<style>
.pagination-bar {
  display: flex;
  justify-content: center;
  margin: 20px 0;
}

.page-numbers {
  display: flex;
  align-items: center;
}

.page-numbers a {
  margin: 0 10px;
  padding: 5px 10px;
  border-radius: 5px;
  color: #fff;
  background-color: #007bff;
  text-decoration: none;
  cursor: pointer;
}

.page-numbers a.current-page {
  background-color: #ccc;
  cursor: default;
}
</style>
