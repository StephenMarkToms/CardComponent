<template>
  <div
    class="
      flex-1
      h-full
      w-full
      text-primary-100
      font-normal
      text-base
      leading-5
      p-4
    "
  >
    <slot v-if="$slots.default" />
    <div v-else class="space-y-2">
      <div class="bg-gray-100 h-4 w-4/5"></div>
      <div class="bg-gray-100 h-4 w-full"></div>
      <div class="bg-gray-100 h-4 w-2/4"></div>
    </div>
  </div>
</template>
