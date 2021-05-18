<template>
  <div
    :class="[
      !cover && 'animate-pulse',
      'h-52 bg-gray-200 w-full overflow-hidden',
    ]"
  >
    <img v-if="cover" class="object-cover h-full w-full" :src="cover" alt="" />
  </div>
</template>
<script>
export default {
  props: {
    cover: {
      type: String,
      required: false,
      default: null,
    },
  },
}
</script>
