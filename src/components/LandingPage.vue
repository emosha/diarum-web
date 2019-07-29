<template>
  <div class="landing-page">
    <Hero />
    <Features />
    <Footer />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Hero from '@/components/Hero.vue';
import Navbar from '@/components/Navbar.vue';
import Features from '@/components/Features.vue';
import Footer from '@/components/Footer.vue';
import Wave from '@/components/shared/Wave.vue';

@Component({
  components: {
    Hero,
    Navbar,
    Wave,
    Features,
    Footer,
  },
})
export default class LandingPage extends Vue {}
</script>

<style lang="scss">
  // @media (max-width: 1199.98px) {
  //   .arrow {
  //     display: none;
  //   }
  // }
</style>
