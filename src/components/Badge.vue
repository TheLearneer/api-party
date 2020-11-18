<template>
  <span
    class="inline-block rounded-full font-semibold select-none px-2 py-1"
    :class="[
      uppercase ? 'uppercase' : 'capitalize',
      category.toLowerCase(),
      active ? 'border-gray-800 border-2 shadow-lg' : 'shadow'
    ]"
  >
    <slot>
      <span
        v-if="icon && iconKey"
        class="mdi mr-1"
        :class="iconKey"
      />
      <span>{{ category }}</span>
    </slot>
  </span>
</template>

<script>
	export default {
		props: {
			uppercase: {
				type: Boolean,
				default: false
			},
			category: {
				type: String,
				default: () => {
					return 'Uncategorized'
				}
			},
			icon: {
				type: Boolean,
				default: false
			},
			active: {
				type: Boolean,
				default: false
			}
		},
		computed: {
			iconKey() {
				switch (this.category) {
					case "games":
						return "mdi-controller-classic";
					case "social":
						return "mdi-account-group";
					case "entertainment":
						return "mdi-sparkles";
					case "animals":
						return "mdi-paw";
					case "movies":
						return "mdi-movie-open";
					case "shows":
						return "mdi-television-play";
					case "comics":
						return "mdi-emoticon-lol";
					case "weather":
						return "mdi-weather-cloudy";
					default:
						return false;
				}
			}
		}
	};
</script>

<style lang="postcss">
	.games {
		@apply bg-gradient-to-tr from-pink-300 via-orange-400 to-red-400;
	}
	.social {
		@apply bg-gradient-to-bl from-teal-300 to-blue-400;
	}
	.entertainment {
		@apply bg-gradient-to-tl from-yellow-300 to-green-400;
	}
	.animals {
		@apply bg-gradient-to-bl from-purple-300 to-pink-400;
	}
	.movies {
		@apply bg-gradient-to-tr from-red-300 to-blue-400;
	}
	.shows {
		@apply bg-gradient-to-br from-yellow-300 to-purple-400;
	}
	.comics {
		@apply bg-gradient-to-l from-indigo-300 via-pink-300 to-yellow-400;
	}
	.weather {
		@apply bg-gradient-to-b from-gray-500 to-gray-100;
	}
</style>