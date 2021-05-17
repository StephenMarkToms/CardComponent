<template>
  <div class="flex h-screen">
    <div class="flex my-auto mx-auto space-x-4 max-w-3xl">
      <Card v-for="(card, index) in cards" :key="index" :card-data="cards[0]" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cards: [
        {
          cover: '/images/location-1.jpg',
          thumbnail: '/images/location-1.jpg',
          title: 'Location 1',
          'sub-title': 'New York',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
          footer: 'Kasa Living',
        },
        {
          cover: '/images/location-2.jpg',
          thumbnail: '/images/location-1.jpg',
          title: 'Location 2',
          'sub-title': 'California',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
          footer: 'Kasa Living',
        },
      ],
    }
  },
}
</script>
