<template>
  <div class="container mx-auto">
    <div class="pb-10 mb-10 mx-4 text-center border-b">
      <span class="font-semibold text-3xl">Categories</span>
      <div class="pt-4">
        <button
          v-for="(cat, i) of categories.sort()"
          :key="i"
          class="m-2 focus:outline-none"
          @click="setCategory(cat.toLowerCase())"
        >
          <Badge
            class="text-sm text-gray-800 bg-gray-400"
            icon
            :uppercase="filters.category === cat"
            :active="filters.category === cat"
            :category="cat"
          />
        </button>
      </div>
    </div>
    <div class="mb-16 mx-4">
      <label
        class="block text-gray-700 font-bold mb-2 text-center"
        for="search-area"
      >
        <span class="mdi mdi-magnify mdi-18px mr-1" />
        <span>Search for API</span>
      </label>
      <input
        id="search-area"
        v-model="filters.search"
        class="bg-gray-200 shadow-lg appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 focus:shadow-none focus:outline-none focus:bg-gray-100 focus:border-purple-400"
        type="text"
        placeholder="Enter API name"
      >
    </div>
    <div class="border-t pt-10">
      <Pagination
        v-if="Math.ceil(list.length / pagination.perPage) > 1"
        :items="list.length"
        :per-page="pagination.perPage"
        :active="pagination.active"
        show-count
        class="mb-10"
        @change="changeActivePage"
      />

      <div
        v-if="list.length"
        class="flex flex-wrap justify-center"
      >
        <ItemCard
          v-for="api in paginatedList"
          :key="api.id"
          :details="api"
          class="mx-6 my-4"
        />
      </div>
      <div v-else>
        No API available matching the filters
      </div>
    </div>

    <Pagination
      v-if="Math.ceil(list.length / pagination.perPage) > 1"
      :items="list.length"
      :per-page="pagination.perPage"
      :active="pagination.active"
      class="mt-10"
      @change="changeActivePage"
    />
  </div>
</template>

<script>
	import { apiList } from "@/assets/apiList";

	export default {
		data() {
			return {
				apiList,
				filters: {
					search: "",
					category: null
				},
				pagination: {
					perPage: 30,
					active: 1
				}
			};
		},
		computed: {
			list() {
				return this.apiList
					.filter((api) => {
						if (this.filters.category === null) return true;
						else if (api.categories.includes(this.filters.category)) return true;
						else return false;
					})
					.filter((api) => {
						if (api.hasOwnProperty('deprecated') && api.deprecated) return false;
						else return true;
					})
					.filter((api) => {
						const query = this.filters.search.toLowerCase();
						return (
							api.name
								.toLowerCase()
								.normalize("NFD")
								.replace(/[\u0300-\u036f]/g, "")
								.includes(query) ||
							api.description
								.toLowerCase()
								.normalize("NFD")
								.replace(/[\u0300-\u036f]/g, "")
								.includes(query)
						);
					})
					.sort((a, b) => (a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1));
			},
			paginatedList() {
				return this.list.slice(
					this.pagination.perPage * (this.pagination.active - 1),
					this.pagination.perPage * this.pagination.active
				);
			},
			categories() {
				const list = [];
				this.apiList
					.reduce((r, e) => (r.push(...e.categories), r), [])
					.forEach((itm) => {
						if (!list.includes(itm)) list.push(itm.toLowerCase());
					});
				return list;
			}
		},
		methods: {
			setCategory(id) {
				let cat = id;
				if (id === this.filters.category) cat = null;
				this.filters.category = cat;
				// Resetting active page number to be 1
				this.pagination.active = 1;
			},
			changeActivePage(page) {
				this.pagination.active = page;
			}
		}
	};
</script>
