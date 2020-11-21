<template>
  <vs-navbar shadow square center-collapsed v-model="active">
    <template #left>
      <vs-button @click="toggleSidebar" class="bar" flat icon>
        <i class="bx bx-menu"></i>
      </vs-button>
    </template>
    <vs-navbar-item id="home" to="/">
      Home
    </vs-navbar-item>
    <vs-navbar-item id="about" to="/about">
      About
    </vs-navbar-item>
    <!-- <template #right>
      <vs-button flat>Login</vs-button>
      <vs-button>Get Started</vs-button>
    </template> -->
  </vs-navbar>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data: () => ({}),
  computed: {
    active: {
      get() {
        return this.$store.state.active;
      },
      set(navbarActive) {
        return this.$store.dispatch("setActive", navbarActive);
      },
    },
  },
  methods: {
    ...mapActions(["toggleSidebar"]),
  },
};
</script>

<style scoped>
.bar {
  display: none;
}
@media (max-width: 767px) {
  .bar {
    display: inline-block;
  }
}
</style>
