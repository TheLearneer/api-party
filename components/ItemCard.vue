<template>
	<div
		class="bg-gray-200 relative border shadow hover:shadow-lg rounded-md p-4 w-84"
	>
		<div class="ribbon" v-if="details.https">
			<span class="uppercase">https</span>
		</div>
		<div class="absolute right-0 top-0 bg-red-400 shadow-md px-2 rounded-tr-md rounded-bl-md text-sm" v-if="deprecated">
			<span class="uppercase font-semibold">deprecated</span>
		</div>
		<div align="center">
			<img
				:src="getImage()"
				:alt="`${details.name} logo`"
				:title="`${details.name} logo`"
				class="object-scale-down w-24 h-24 rounded-lg mb-2"
			/>
			<span class="text-xl font-semibold mx-auto my-auto">
				{{ details.name }}
			</span>
			<span
				class="mdi mdi-check-decagram mdi-24px text-blue-400"
				v-if="details.official"
				title="Official API"
			/>
			<span
				class="mdi mdi-currency-usd-circle mdi-24px text-orange-400"
				v-if="details.hasPaidPlan"
				title="Includes Paid Plans"
			/>
		</div>
		<div class="text-center mt-3">
			<Badge
				v-for="(cat, i) of details.categories"
				:key="i"
				:category="cat"
				class="m-1 text-xs bg-gray-400 shadow-md"
				icon
			/>
		</div>
		<div class="text-center border-gray-400 border-t border-b my-3 py-2">
			<span>{{ details.description }}</span>
		</div>
		<div v-if="details.apiUrl && !details.auth" class="my-1">
			<span class="mdi mdi-link-variant mdi-18px mr-1" />
			<a
				:href="details.apiUrl"
				rel="noopener"
				class="text-blue-700 visited:text-purple-600"
				target="_blank"
			>
				Base API url
			</a>
		</div>
		<div v-if="details.docs" class="my-1">
			<span class="mdi mdi-book-open-variant mdi-18px mr-1" />
			<a
				:href="details.docs"
				rel="noopener"
				class="text-blue-700 visited:text-purple-600"
				target="_blank"
			>
				Documentation
			</a>
		</div>
		<div v-if="details.auth" class="my-1">
			<span class="mdi mdi-key mdi-18px mr-1" />
			<span>Authentication: </span>
			<span class="font-semibold">{{ apiAuth }}</span>
		</div>
	</div>
</template>

<script>
	export default {
		props: {
			details: Object
		},
		computed: {
			apiAuth() {
				switch (this.details.auth) {
					case 1:
						return "API Key";
					case 2:
						return "OAuth";
					default:
						return "None";
				}
			},
			deprecated() {
				return this.details.hasOwnProperty('deprecated');
			}
		},
		methods: {
			getImage() {
				try {
					if (!this.details.img)
						return require("@/assets/images/logo/default.png");
					else return require(`@/assets/images/logo/${this.details.img}`);
				} catch (err) {
					return require("@/assets/images/logo/default.png");
				}
			}
		}
	};
</script>

<style scoped>
	.ribbon {
		position: absolute;
		left: -5px;
		top: -5px;
		z-index: 1;
		overflow: hidden;
		width: 75px;
		height: 75px;
		text-align: right;
	}
	.ribbon span {
		font-size: 10px;
		color: #fff;
		text-align: center;
		font-weight: bold;
		line-height: 20px;
		transform: rotate(-45deg);
		-webkit-transform: rotate(-45deg);
		width: 100px;
		display: block;
		background: #0d7408;
		background: linear-gradient(#1add0f 0%, #0d7408 100%);
		box-shadow: 0 3px 10px -5px rgba(0, 0, 0, 1);
		position: absolute;
		top: 19px;
		left: -21px;
	}
	.ribbon span::before {
		content: "";
		position: absolute;
		left: 0px;
		top: 100%;
		z-index: -1;
		border-left: 3px solid #0d7408;
		border-right: 3px solid transparent;
		border-bottom: 3px solid transparent;
		border-top: 3px solid #0d7408;
	}
	.ribbon span::after {
		content: "";
		position: absolute;
		right: 0%;
		top: 100%;
		z-index: -1;
		border-right: 3px solid #0d7408;
		border-left: 3px solid transparent;
		border-bottom: 3px solid transparent;
		border-top: 3px solid #0d7408;
	}
</style>
