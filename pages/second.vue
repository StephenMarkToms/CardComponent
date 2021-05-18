<template>
  <div class="mx-auto p-4 bg-tan-50 pt-4 h-screen">
    <div class="flex justify-center">
      <NuxtLink to="/">
        <HeaderBase class="flex">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M7 16l-4-4m0 0l4-4m-4 4h18"
            />
          </svg>
          Return to Home
        </HeaderBase>
      </NuxtLink>
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
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          footer: 'Kasa Living',
        },
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
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
          footer: 'Kasa Living',
        },
        {
          cover: '/images/location-2.jpg',
          thumbnail: '/images/location-1.jpg',
          title: 'Location 2',
          'sub-title': 'California',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
          footer: 'Kasa Living',
        },
      ],
    }
  },
  methods: {
    alert() {
      if (process.client) {
        alert('You clicked that card!')
      }
    },
    log() {
      if (process.client) {
        // eslint-disable-next-line no-console
        console.log('You clicked that card!')
      }
    },
  },
}
</script>
