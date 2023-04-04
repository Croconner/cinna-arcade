<template>
  <div class="pagination-bar">
    <button
      class="arrow-button"
      @click="handleChangePage(currentPage - 1)"
      v-show="currentPage > 1"
    >
      &lt;
    </button>
    <span v-show="currentPage >= 4" >
      <button
        :class="{ active: page === currentPage }"
        @click="handleChangePage(1)"
      >
        1
      </button>
    </span>
    <span v-if="showPreviousEllipsis">...</span>
    <span v-for="page in displayedPages" :key="page">
      <button
        :class="{ active: page === currentPage }"
        @click="handleChangePage(page)"
      >
        {{ page }}
      </button>
    </span>
    <span v-if="showNextEllipsis">...</span>
    <span v-show="currentPage <= totalPages - 3">
      <button
        :class="{ active: page === currentPage }"
        @click="handleChangePage(totalPages)"
      >
        {{ totalPages }}
      </button>
    </span>
    <button
      class="arrow-button"
      @click="handleChangePage(currentPage + 1)"
      v-show="currentPage < totalPages"
    >
      &gt;
    </button>
  </div>
</template>

<script>
export default {
  name: "PaginationBar",
  props: {
    currentPage: {
      type: Number,
      required: true,
    },
    totalPages: {
      type: Number,
      required: true,
    },
    maxDisplayedPages: {
      type: Number,
      default: 5,
    },
    onChangePage: {
      type: Function,
      required: true,
    },
  },
  computed: {
    displayedPages() {
      const halfDisplayedPages = Math.floor(this.maxDisplayedPages / 2);
      const startPage = Math.max(this.currentPage - halfDisplayedPages, 1);
      const endPage = Math.min(
        this.totalPages,
        startPage + this.maxDisplayedPages - 1
      );

      let pages = [];
      for (let i = startPage; i <= endPage; i++) {
        pages.push(i);
      }

      return pages;
    },
    showPreviousEllipsis() {
      return this.displayedPages[0] > 1;
    },
    showNextEllipsis() {
      return (
        this.displayedPages[this.displayedPages.length - 1] < this.totalPages
      );
    },
  },
  methods: {
    handleChangePage(page) {
      this.onChangePage(page);
    },
  },
};
</script>

<style scoped>
.pagination-bar {
  display: flex;
  justify-content: center;
  align-items: center;
}

.pagination-bar button {
  margin: 0 5px;
  border: none;
  background: none;
  color: #efefef;
  cursor: pointer;
}

.pagination-bar button.active {
  font-weight: bold;
}

.arrow-button {
  margin-right: 10px;
  font-size: 1.5rem;
  background-color: transparent;
  border: none;
  color: #007aff;
  cursor: pointer;
}

.arrow-button:focus {
  outline: none;
}
</style>
