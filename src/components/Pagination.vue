<template>
  <div>
    <div
      v-if="showCount"
      align="center"
      class="text-sm"
    >
      <span>
        {{ perPage * (active - 1) + 1 }} -
        {{ Math.min(perPage * active, items) }}
      </span>
      <span>of</span>
      <span>{{ items }} Items</span>
    </div>
    <div class="flex flex-wrap justify-between mt-3 mx-2">
      <div>
        <button
          class="border w-10 h-10 rounded-lg focus:outline-none focus:shadow-md"
          :class="active === 1 ? 'bg-gray-300 cursor-not-allowed' : ''"
          :disabled="active === 1"
          aria-label="Previous page"
          @click="updateActivePage(active - 1)"
        >
          <Icon
            :path="leftIcon"
            size="32"
            :class="active === 1 ? 'text-gray-600' : ''"
          />
        </button>
      </div>
      <div>
        <button
          v-if="hasFirst"
          class="border w-10 h-10 mx-1 rounded-full focus:outline-none"
          :class="1 === active ? 'bg-blue-200 shadow-md' : ''"
          aria-label="Page 1"
          @click="updateActivePage(1)"
        >
          <span class="font-semibold">1</span>
        </button>
        <span v-if="hasFirstEllipsis">&hellip;</span>

        <button
          v-for="page of pagesInRange"
          :key="page"
          class="border w-10 h-10 mx-1 rounded-full focus:outline-none"
          :class="page === active ? 'bg-blue-200 shadow-md' : ''"
          :aria-label="`Page ${page}`"
          @click="updateActivePage(page)"
        >
          <span class="font-semibold">{{ page }}</span>
        </button>

        <span v-if="hasLastEllipsis">&hellip;</span>
        <button
          v-if="hasLast"
          class="border w-10 h-10 mx-1 rounded-full focus:outline-none"
          :class="pageCount === active ? 'bg-blue-200 shadow-md' : ''"
          :aria-label="`Page ${pageCount}`"
          @click="updateActivePage(pageCount)"
        >
          <span class="font-semibold">{{ pageCount }}</span>
        </button>
      </div>
      <div>
        <button
          class="border w-10 h-10 rounded-lg focus:outline-none focus:shadow-md"
          :class="active === pageCount ? 'bg-gray-300 cursor-not-allowed' : ''"
          :disabled="active === pageCount"
          aria-label="Next page"
          @click="updateActivePage(active + 1)"
        >
          <Icon
            :path="rightIcon"
            size="32"
            :class="active === pageCount ? 'text-gray-600' : ''"
          />
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mdiChevronLeft, mdiChevronRight } from '@mdi/js';

export default {
  props: {
    items: {
      type: Number,
      required: true,
    },
    perPage: {
      type: Number,
      required: true,
    },
    active: {
      type: Number,
      default: 1,
    },
    activeRange: {
      type: Number,
      default: 2,
    },
    showCount: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    pageCount() {
      return Math.ceil(this.items / this.perPage);
    },
    pagesInRange() {
      let left = Math.max(1, this.active - this.activeRange);
      if (left - 1 === 2) left--;
      let right = Math.min(this.active + this.activeRange, this.pageCount);
      if (this.pageCount - right === 2) right++;

      const pages = [];
      for (let i = left; i <= right; i++) pages.push(i);
      return pages;
    },
    hasFirst() {
      return this.active >= 2 + this.activeRange;
    },
    hasFirstEllipsis() {
      return this.active >= this.activeRange + 4;
    },
    hasLast() {
      return this.active <= this.pageCount - (1 + this.activeRange);
    },
    hasLastEllipsis() {
      return this.active < this.pageCount - (2 + this.activeRange);
    },
    leftIcon() {
      return mdiChevronLeft;
    },
    rightIcon() {
      return mdiChevronRight;
    }
  },
  methods: {
    updateActivePage(count) {
      // eslint-disable-next-line vue/no-mutating-props
      this.active = count;
      this.$emit("change", this.active);
    },
  },
};
</script>