Vue.component('pagination', {
    template: `<nav aria-label="Page navigation example">
    <ul class="pagination">
      <li
        class="page-item"
        :class="{'disabled': pages.current_page === 1}"
      >
        <a
          class="page-link"
          href="#"
          aria-label="Previous"
          @click.prevent="emitPages(pages.current_page - 1)"
        >
          <span aria-hidden="true">&laquo;</span>
        </a>
      </li>
      <li
        v-for="(item, index) in pages.total_pages"
        :key="index"
        class="page-item"
        :class="{'active': item === pages.current_page}"
      >
        <a
          class="page-link"
          href="#"
          @click.prevent="emitPages(item)"
        >{{ item }}</a>
      </li>
      <li
        class="page-item"
        :class="{'disabled': pages.current_page === pages.total_pages}"
      >
        <a
          class="page-link"
          href="#"
          aria-label="Next"
          @click.prevent="emitPages(pages.current_page + 1)"
        >
          <span aria-hidden="true">&raquo;</span>
        </a>
      </li>
    </ul>
  </nav>`,
    data() {
      return {
      };
    },
    props: {
      pages: {},
    },
    methods: {
      emitPages(item) {
        this.$emit('emit-pages', item);
      },
    },
  });