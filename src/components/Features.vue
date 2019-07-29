<template>
  <div class="features" id="features">
    <h2 class="features__heading">Features</h2>
    <hr class="features__line">
    <div class="features__cards">
      <FeatureCard text="Record your day" icon="pen" />
      <FeatureCard text="Add your mood" icon="smile" />
      <FeatureCard text="Check your todos" icon="check"  />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import FeatureCard from '@/components/shared/FeatureCard.vue';

@Component({
  components: {
    FeatureCard,
  },
})

export default class Features extends Vue {}
</script>

<style scoped lang="scss">
  @import '@/assets/styles/mixins.scss';

  .features {
    background: url('../assets/img/diarum-features.svg') no-repeat center center;
    background-size: cover;
    width: 100%;
    padding-top: 70px;

    &__heading {
      color: #5d59cb;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 2.5px;
      font-size: 1.8em;
      margin-bottom: 15px;
    }

    &__line {
      width: 8%;
      border-top: 3px solid #5d59cb;
    }

    &__cards {
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      padding-top: 130px;

      .feature-card {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        transition: .3s margin-top ease;

        &:hover {
          margin-top: -20px;
        }
      }
    }
  }

  @media (max-width: 1199.98px) {
    .features {
      padding-top: 40px;

      &__cards {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        padding-top: 100px;

        .feature-card {
          margin-bottom: 30px;
        }
      }
    }
  }

  @include media-breakpoint-down(sm) {
    .features {
      padding-top: 0;
    }
  }
</style>
