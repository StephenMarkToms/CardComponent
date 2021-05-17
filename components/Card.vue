<template>
  <div
    class="
      border
      rounded-lg
      hover:shadow-lg
      transition-shadow
      duration-200
      cursor-pointer
      font-roboto
      max-w-lg
      flex flex-wrap
    "
  >
    <div v-if="cardData.cover" class="aspect-h-2 aspect-w-3 w-full">
      <img class="object-cover rounded-t-lg" :src="cardData.cover" alt="" />
    </div>
    <div class="p-4">
      <div class="flex my-4">
        <img
          :src="cardData.thumbnail"
          class="rounded-full w-16 h-16 object-cover mr-4"
        />
        <div class="my-auto leading-2">
          <div class="font-bold text-xl font-lora text-primary-100">
            {{ cardData.title }}
          </div>
          <div class="text-primary-50 text-sm">
            {{ cardData['sub-title'] }}
          </div>
        </div>
      </div>
      <div class="mt-2 text-primary-100 font-normal text-base leading-5">
        {{ cardData.description }}
      </div>
    </div>
    <div class="w-full p-4 border-t text-sm font-medium mt-auto">
      {{ cardData.footer }}
    </div>
  </div>
</template>
<script>
export default {
  props: {
    cardData: {
      type: Object,
      required: true,
    },
  },
}
</script>
