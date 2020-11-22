<template>
  <svg
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    :width="width || size"
    :height="height || size"
    :viewBox="viewBox"
  >
    <path :d="path" />
  </svg>
</template>

<script>
export default {
  props: {
    width: {
      type: [Number, String],
      default: null
    },
    height: {
      type: [Number, String],
      default: null
    },
    size: {
      type: [Number, String],
      default: 24
    },
    viewBox: {
      type: [String],
      default: '0 0 24 24'
    },
    path: {
        type: String,
        required: true
    }
  }
}
</script>