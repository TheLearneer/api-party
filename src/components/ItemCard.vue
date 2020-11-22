<template>
  <div
    class="bg-gray-200 relative border shadow hover:shadow-lg rounded-md p-4 w-84"
  >
    <div
      v-if="details.https"
      class="ribbon"
    >
      <span class="uppercase">https</span>
    </div>
    <div
      v-if="deprecated"
      class="absolute right-0 top-0 bg-red-400 shadow-md px-2 rounded-tr-md rounded-bl-md text-sm"
    >
      <span class="uppercase font-semibold">deprecated</span>
    </div>
    <div align="center">
      <img
        :src="getImage()"
        :alt="`${details.name} logo`"
        :title="`${details.name} logo`"
        class="object-scale-down w-24 h-24 rounded-lg mb-2"
      >
      <span class="flex justify-center">
        <span class="text-xl font-semibold my-auto">
          {{ details.name }}
        </span>
        <Icon
          v-if="details.official"
          :path="officialIcon"
          class="text-blue-400 ml-1 mt-1"
        />
        <Icon
          v-if="details.hasPaidPlan"
          :path="paidPlanIcon"
          class="text-orange-400 ml-1 mt-1"
        />
      </span>
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
    <div
      v-if="details.apiUrl && !details.auth"
      class="my-1 flex"
    >
      <Icon
        :path="linkIcon"
        size="18"
        class="mr-1 mt-1"
      />
      <a
        :href="details.apiUrl"
        rel="noopener"
        class="text-blue-700 visited:text-purple-600"
        target="_blank"
      >
        Base API url
      </a>
    </div>
    <div
      v-if="details.docs"
      class="my-1 flex"
    >
      <Icon
        :path="documentationIcon"
        size="18"
        class="mr-1 mt-1"
      />
      <a
        :href="details.docs"
        rel="noopener"
        class="text-blue-700 visited:text-purple-600"
        target="_blank"
      >
        Documentation
      </a>
    </div>
    <div
      v-if="details.auth"
      class="my-1 flex"
    >
      <Icon
        :path="authenticationIcon" 
        size="18"
        class="mr-1 mt-1"
      />
      <span>Authentication: </span>
      <span class="font-semibold">{{ apiAuth }}</span>
    </div>
  </div>
</template>

<script>
import {mdiBookOpenVariant, mdiCheckDecagram, mdiCurrencyUsdCircle, mdiKey, mdiLinkVariant} from '@mdi/js';
export default {
  props: {
    details: {
      type: Object,
      default: () => {
        return { available: false };
      },
    },
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
      return this.details.hasOwnProperty("deprecated");
    },
    officialIcon() {
return mdiCheckDecagram;
    },
    paidPlanIcon() {
return mdiCurrencyUsdCircle;
    },
    linkIcon() {
      return mdiLinkVariant;
    },
    documentationIcon() {
      return mdiBookOpenVariant
    },
    authenticationIcon() {
      return mdiKey;
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
    },
  },
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
