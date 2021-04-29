<template>
  <div class="home">
    <h2>All destination</h2>
    <div class="destinations">
      <div v-for="destination in destinations" :key="destination.name">
        <router-link
          :to="{
            name: 'DestinationDetails',
            params: { slug: destination.slug },
          }"
        >
          <h2 @click="toName(destination.id)">
            {{ destination.name }}
          </h2>
        </router-link>

        <figure>
          <router-link
            :to="{
              name: 'DestinationDetails',
              params: { slug: destination.slug },
            }"
          >
            <img
              :src="require(`@/assets/${destination.image}`)"
              :alt="destination.name"
            />
          </router-link>
        </figure>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /srimport HelloWorld from "@/components/HelloWorld.vue";
import store from '@/store.js';
export default {
  name: 'Home',
  components: {},
  data() {
    return {
      destinations: store.destinations,
    };
  },
  methods: {
    toName(id) {
      console.log('the id ' + id);
    },
  },
};
</script>

<style scoped>
.home {
  max-width: 1400px;
  margin: 0 auto;
}
img {
  max-width: 200px;
}
.destinations {
  display: flex;
  justify-content: space-between;
}
</style>
