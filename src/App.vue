<template>
  <div id="app">
    <div class="main">
      <Header />
      <router-view />
      <Footer />
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
const Header = () => import("./modules/components/Header.vue");
const Footer = () => import("./modules/components/Footer.vue");
export default {
  name: "App",

  metaInfo: {
    meta: [{ charset: "utf-8" }],
  },
  components: {
    Header,
    Footer,
  },
  computed: {
    ...mapGetters({
      title: "title",
    }),
  },
};
</script>
