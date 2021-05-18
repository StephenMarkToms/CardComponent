<template>
  <div class="mx-auto p-4 bg-tan-50 pt-4">
    <HeaderBase> Responsive Example </HeaderBase>
    <div
      class="
        flex
        grid
        md:grid-cols-2
        xl:grid-cols-4
        gap-4
        my-auto
        mx-auto
        justify-center
      "
    >
      <CardBase v-for="(card, index) in cards" :key="index">
        <CardCover :cover="card.cover" />
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
      </CardBase>
    </div>
    <HeaderBase> Horizontal Orientation </HeaderBase>
    <div class="flex mt-5 justify-center">
      <CardBase>
        <CardCover :cover="cards[1].cover" />
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
      </CardBase>
    </div>
    <HeaderBase> Flexible Application of Sub Components </HeaderBase>
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
      <CardBase>
        <CardCover :cover="cards[1].cover" />
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
      </CardBase>
      <CardBase>
        <CardCover :cover="cards[1].cover" />
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
      </CardBase>
      <CardBase>
        <CardDescription
          :title="cards[1].title"
          :sub-title="cards[1]['sub-title']"
        />
        <CardCover :cover="cards[1].cover" />
        <CardBody>
          {{ cards[1].description }}
        </CardBody>
        <CardFooter>
          {{ cards[1].footer }}
        </CardFooter>
      </CardBase>
      <CardBase>
        <CardCover :cover="cards[1].cover" />
        <CardDescription
          :title="cards[1].title"
          :sub-title="cards[1]['sub-title']"
        />
        <CardBody>
          {{ cards[1].description }}
        </CardBody>
      </CardBase>
    </div>
    <HeaderBase> Variations </HeaderBase>
    <div class="flex max-w-md my-auto mx-auto justify-center">
      <CardBase>
        <CardCover :cover="cards[1].cover" />
        <CardDescription
          :thumbnail="cards[1].thumbnail"
          :title="cards[1].title"
          :sub-title="cards[1]['sub-title']"
        />
        <CardBody>
          {{ cards[1].description }}
        </CardBody>
      </CardBase>
    </div>
    <div class="flex max-w-md my-auto mx-auto justify-center mt-6">
      <CardBase>
        <CardDescription
          :thumbnail="cards[1].thumbnail"
          :title="cards[1].title"
        />
        <CardBody>
          {{ cards[1].description }}
        </CardBody>
      </CardBase>
    </div>
    <div class="flex max-w-md my-auto mx-auto justify-center mt-6">
      <CardBase>
        <CardBody>
          {{ cards[1].description }}
        </CardBody>
        <CardFooter>
          {{ cards[1].footer }}
        </CardFooter>
      </CardBase>
    </div>
    <HeaderBase> Dynamic Content Examples </HeaderBase>
    <div class="flex max-w-md my-auto mx-auto justify-center">
      <CardBase>
        <CardCover :cover="cards[1].cover" />
        <CardDescription
          :thumbnail="cards[1].thumbnail"
          :title="cards[1].title"
          :sub-title="cards[1]['sub-title']"
        />
        <CardBody>
          <p>
            Hello Kasa! This is some dynamic content here.
            <a
              href="https://www.kasa.com/"
              target="_blank"
              class="text-blue-50 underline"
              >Click this link to open the Kasa homepage in a new tab!</a
            >
          </p>
        </CardBody>
      </CardBase>
    </div>
    <div class="flex max-w-md my-auto mx-auto justify-center mt-6">
      <CardBase>
        <CardCover :cover="cards[1].cover" />
        <CardDescription
          :thumbnail="cards[1].thumbnail"
          :title="cards[1].title"
          :sub-title="cards[1]['sub-title']"
        />
        <CardBody>
          <p>
            Feel free to place anything in here you want! Let's try an image!
          </p>
          <img
            class="rounded-lg mt-5"
            src="https://media.giphy.com/media/13HgwGsXF0aiGY/giphy.gif"
          />
        </CardBody>
      </CardBase>
    </div>
    <HeaderBase> Loading States </HeaderBase>
    <div
      class="
        md:grid md:grid-cols-2
        xl:grid-cols-4
        gap-4
        space-y-4
        my-auto
        mx-auto
        justify-center
      "
    >
      <CardBase>
        <CardCover />
        <CardDescription :thumbnail="cards[1].thumbnail" />
        <CardBody />
        <CardFooter />
      </CardBase>
      <CardBase>
        <CardCover />
        <CardDescription :thumbnail="cards[1].thumbnail" />
        <CardBody />
        <CardFooter />
      </CardBase>
      <CardBase>
        <CardDescription />
        <CardCover />
        <CardBody />
        <CardFooter />
      </CardBase>
      <CardBase>
        <CardCover />
        <CardDescription />
        <CardBody />
      </CardBase>
    </div>
    <HeaderBase> Programmed Actions </HeaderBase>
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
      <CardBase @click.native="alert()">
        <CardCover :cover="cards[1].cover" />
        <CardDescription
          :thumbnail="cards[1].thumbnail"
          :title="'Alert!'"
          :sub-title="cards[1]['sub-title']"
        />
        <CardBody> Click this card to trigger an alert! </CardBody>
      </CardBase>
      <CardBase @click.native="log()">
        <CardCover :cover="cards[1].cover" />
        <CardDescription
          :thumbnail="cards[1].thumbnail"
          :title="'Console Log!'"
          :sub-title="cards[1]['sub-title']"
        />
        <CardBody> Click this card to trigger a console statement! </CardBody>
      </CardBase>
      <NuxtLink to="/second">
        <CardBase>
          <CardCover :cover="cards[1].cover" />
          <CardDescription
            :thumbnail="cards[1].thumbnail"
            :title="'Internal Page Navigation'"
            :sub-title="cards[1]['sub-title']"
          />
          <CardBody>
            This will use Nuxt's SPA to navigate to the next page and give a
            page path linking on hovering.
          </CardBody>
        </CardBase>
      </NuxtLink>
      <CardBase @click.native="$router.push('/second')">
        <CardCover :cover="cards[1].cover" />
        <CardDescription
          :thumbnail="cards[1].thumbnail"
          :title="'Internal Page Navigation 2'"
          :sub-title="cards[1]['sub-title']"
        />
        <CardBody>
          This will use Nuxt's SPA to navigate to the next page
          <b class="font-bold">without</b> a page path linking on hovering.
        </CardBody>
      </CardBase>
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
