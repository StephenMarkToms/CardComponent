<template>
  <div>
    <div v-if="title" class="flex p-4 w-full">
      <div v-if="thumbnail">
        <img
          :src="thumbnail"
          class="rounded-full w-12 h-12 object-cover mr-4"
        />
      </div>
      <div class="my-auto leading-2">
        <div class="font-bold text-xl font-lora text-primary-100">
          {{ title }}
        </div>
        <div class="text-primary-50 text-sm">
          {{ subTitle }}
        </div>
      </div>
    </div>
    <div v-else class="flex p-4 w-full">
      <div v-if="thumbnail">
        <div
          class="
            bg-gray-100
            animate-pulse
            rounded-full
            w-12
            h-12
            object-cover
            mr-4
          "
        ></div>
      </div>
      <div class="my-auto leading-2 w-full space-y-2">
        <div
          class="
            h-6
            bg-gray-100
            animate-pulse
            font-bold
            text-xl
            font-lora
            text-primary-100
            w-1/2
          "
        ></div>
        <div
          class="h-4 bg-gray-100 animate-pulse w-1/3 text-primary-50 text-sm"
        ></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    thumbnail: {
      required: false,
      type: String,
      default: null,
    },
    title: {
      required: false,
      type: String,
      default: null,
    },
    subTitle: {
      required: false,
      type: String,
      default: null,
    },
  },
}
</script>
