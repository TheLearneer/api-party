<template>
  <span
    class="w-auto inline-block rounded-full font-semibold select-none px-2 py-1"
    :class="[
      uppercase ? 'uppercase' : 'capitalize',
      category.toLowerCase(),
      active ? 'border-gray-800 border-2 shadow-lg' : 'shadow'
    ]"
  >
    <slot>
      <span class="flex">
        <Icon
          v-if="icon && iconKey"
          :path="iconKey"
          :size="18"
        />
        <span class="ml-1">
          {{ category }}
        </span>
      </span>
    </slot>
  </span>
</template>

<script>
	import { mdiControllerClassic, mdiAccountGroup, mdiSparkles, mdiPaw, mdiMovieOpen, mdiTelevisionPlay, mdiEmoticonLol, mdiWeatherCloudy, mdiMapMarker } from '@mdi/js';

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
						return mdiControllerClassic;
					case "social":
						return mdiAccountGroup;
					case "entertainment":
						return mdiSparkles;
					case "animals":
						return mdiPaw;
					case "movies":
						return mdiMovieOpen;
					case "shows":
						return mdiTelevisionPlay;
					case "comics":
						return mdiEmoticonLol;
					case "weather":
						return mdiWeatherCloudy;
					case "geocoding":
						return mdiMapMarker;
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
	.geocoding {
		@apply bg-gradient-to-tr from-teal-400 via-blue-300 to-green-400
	}
</style>