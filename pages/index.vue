<template>
  <div class="mx-auto p-4 bg-tan-50 pt-4">
    <HeaderBase> Responsive Example </HeaderBase>
    <div
      class="
        grid
        md:grid-cols-2
        xl:grid-cols-4
        gap-4
        my-auto
        mx-auto
        justify-center
      "
    >
      <CardWrapper v-for="(card, index) in cards" :key="index">
        <CardCover />
        <CardDescription
          :thumbnail="card.thumbnail"
          :title="card.title"
          :sub-title="card['sub-title']"
        />
        <CardBody>
          {{ card.description }}
        </CardBody>
        <CardFooter>
          {{ card.footer }}
        </CardFooter>
      </CardWrapper>
    </div>
    <HeaderBase> Horizontal Orientation </HeaderBase>
    <div class="flex mt-5 justify-center">
      <CardWrapper>
        <CardCover />
        <CardDescription
          :title="cards[1].title"
          :sub-title="cards[1]['sub-title']"
        />
        <CardBody>
          {{ cards[1].description }}
        </CardBody>
        <CardFooter>
          {{ cards[1].footer }}
        </CardFooter>
      </CardWrapper>
    </div>
    <HeaderBase> Flexible Application of Sub Pieces </HeaderBase>
    <div
      class="
        grid
        md:grid-cols-2
        xl:grid-cols-4
        gap-4
        my-auto
        mx-auto
        justify-center
      "
    >
      <CardWrapper class="max-w-xl">
        <CardCover />
        <CardDescription
          :thumbnail="cards[1].thumbnail"
          :title="cards[1].title"
          :sub-title="cards[1]['sub-title']"
        />
        <CardBody>
          {{ cards[1].description }}
        </CardBody>
        <CardFooter>
          {{ cards[1].footer }}
        </CardFooter>
      </CardWrapper>
      <CardWrapper class="max-w-xl">
        <CardCover />
        <CardDescription
          :thumbnail="cards[1].thumbnail"
          :title="cards[1].title"
          :sub-title="cards[1]['sub-title']"
        />
        <CardBody>
          {{ cards[1].description }}
        </CardBody>
        <CardFooter>
          {{ cards[1].footer }}
        </CardFooter>
      </CardWrapper>
      <CardWrapper class="max-w-xl">
        <CardDescription
          :title="cards[1].title"
          :sub-title="cards[1]['sub-title']"
        />
        <CardCover />
        <CardBody>
          {{ cards[1].description }}
        </CardBody>
        <CardFooter>
          {{ cards[1].footer }}
        </CardFooter>
      </CardWrapper>
      <CardWrapper class="max-w-xl">
        <CardCover />
        <CardDescription
          :title="cards[1].title"
          :sub-title="cards[1]['sub-title']"
        />
        <CardBody>
          {{ cards[1].description }}
        </CardBody>
      </CardWrapper>
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
}
</script>
