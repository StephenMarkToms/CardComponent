<template>
  <div
    class="
      focus:ring
      bg-white
      hover:bg-gray-50
      transition-colors
      flex-col
      border
      rounded-lg
      hover:shadow-lg
      transition-shadow
      duration-300
      cursor-pointer
      font-roboto
      max-w-md
      xl:max-w-2xl
      overflow-hidden
      flex flex-wrap
    "
  >
    <slot />
  </div>
</template>
<script>
export default {
  props: {
    cardData: {
      type: Object,
      required: false,
      default: null,
    },
  },
}
</script>
