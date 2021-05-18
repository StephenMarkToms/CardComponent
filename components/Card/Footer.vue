<template>
  <div
    :class="[
      !$slots.default && 'border-gray-50 animate-pulse',
      'w-full p-4 border-t text-sm font-medium mt-auto',
    ]"
  >
    <slot v-if="$slots.default" />
    <div v-else class="space-y-2">
      <div class="bg-gray-100 h-4 w-4/5"></div>
    </div>
  </div>
</template>
