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
    "
  >
    <div v-if="cardData.cover" class="aspect-w-3 aspect-h-2">
      <img class="object-cover rounded-t-lg" :src="cardData.cover" alt="" />
    </div>
    <div class="p-4">
      <div class="flex my-4">
        <img
          :src="cardData.thumbnail"
          class="rounded-full w-16 h-16 object-cover mr-4"
        />
        <div class="my-auto leading-3">
          <div class="font-bold text-2xl font-lora">
            {{ cardData.title }}
          </div>
          <div>
            {{ cardData['sub-title'] }}
          </div>
        </div>
      </div>
      <div class="mt-2 text-sm">
        {{ cardData.description }}
      </div>
    </div>
    <div class="p-4 border-t">
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
