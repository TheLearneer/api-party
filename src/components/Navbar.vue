<template>
  <nav class="bg-gray-800 sticky top-0 z-50">
    <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
      <div class="relative flex items-center justify-between h-16">
        <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
          <button
            class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white transition duration-150 ease-in-out"
            aria-label="Main menu"
            aria-expanded="false"
            @click="changeExpanded()"
          >
            <SvgMenuOpen :class="menuActive ? 'hidden' : 'block'" />
            <SvgMenuClose :class="menuActive ? 'block' : 'hidden'" />
          </button>
        </div>
        <div
          class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start"
        >
          <div class="flex-shrink-0">
            <img
              class="block h-10 object-scale-down"
              src="@/assets/images/logo2.png"
              alt="API logo"
            >
          </div>
        </div>
        <div
          class="hidden md:block absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0"
        >
          <nuxt-link
            v-for="(route, i) of routes"
            :key="i"
            :to="route.path"
            class="ml-4 px-3 py-2 rounded-full text-sm font-medium leading-5 text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out"
            active-class="activeRoute"
            exact
          >
            {{ route.name }}
          </nuxt-link>
        </div>
      </div>
    </div>

    <div
      class="sm:hidden"
      :class="menuActive ? 'block' : 'hidden'"
    >
      <div class="px-2 pt-2 pb-3">
        <div
          v-for="(route, i) of routes"
          :key="i"
          class="block mb-2 px-3 py-2 rounded text-base font-medium text-white bg-gray-900 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out"
          @click="changeExpanded(false)"
        >
          <nuxt-link :to="route.path">
            {{ route.name }}
          </nuxt-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
	export default {
		data() {
			return {
				menuActive: false,
				routes: [
					{ name: "Home", path: "/" },
					{ name: "List", path: "/list" }
				]
			};
		},
		methods: {
			changeExpanded(value) {
				if (value) this.menuActive = value;
				this.menuActive = !this.menuActive;
			}
		}
	};
</script>

<style lang="postcss" scoped>
	.activeRoute {
		@apply bg-gray-700;
	}
</style>