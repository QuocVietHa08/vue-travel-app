<template>
  <nav id="nav">
    <ul class="nav-links">
      <h3>This is the travel app</h3>
      <li class="links">
        <router-link to="/">Home </router-link>
      </li>
      <li
        v-for="destination in destinations"
        :key="destination.name"
        class="links"
      >
        <router-link
          :to="{
            name: 'DestinationDetails',
            params: { slug: destination.slug },
          }"
          class="links"
          >{{ destination.name }}</router-link
        >
      </li>
    </ul>
  </nav>
</template>
<script>
import store from '@/store';
export default {
  data() {
    return {
      destinations: store.destinations,
    };
  },
};
</script>
<style scoped>
#nav a.active-class {
  color: blue;
  font-weight: bold;
}
#nav a {
  padding: 0 10px;
}

.nav-links {
  width: 700px;
  display: flex;
  list-style: none;
  justify-content: space-around;
  line-height: 100%;
  align-items: center;
}
</style>
