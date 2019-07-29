<template>
  <div class="hero" id="hero">
    <Navbar />
    <div class="hero__main">
      <img src="../assets/img/diary.png" class="hero__main__img">
      <div class="hero__main__text-div">
        <p class="hero__main__text hero__main__text--big">Let's keep your secrets</p>
        <p class="hero__main__text hero__main__text--small">
          Diarum keeps your secrets and tracks your todos and habits.
        </p>
        <router-link to="/signup" class="btn hero__main__btn">
          Get Started
        </router-link>
      </div>
    </div>
    <Arrow href="#features" direction="down" />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Navbar from '@/components/Navbar.vue';
import Arrow from '@/components/shared/Arrow.vue';

@Component({
  components: {
    Navbar,
    Arrow,
  },
})

export default class Hero extends Vue {}
</script>

<style scoped lang="scss">
  @import '@/assets/styles/mixins.scss';

  .hero {
    display: flex;
    flex-direction: column;
    background: url('../assets/img/diarum-hero@0,75x.svg') no-repeat center center;
    background-size: cover;
    height: 90vh;

    &__main {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      height: 100%;

      &__img {
        width: 412.5px;
        height: 487.5px;
        padding-left: 50px;
      }

      &__text-div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-top: -70px;
      }

      &__text {
        color: #deefed;
        font-weight: 300;
        margin: 0;

        &--big {
          font-size: 3.2em;
        }

        &--small {
          font-size: 1.4em;
          width: 70%;
          margin-top: 10px;
        }
      }

      &__btn {
        margin-top: 30px;
        padding: 15px 32px;
      }
    }
  }

  @media (width: 375px) {
    .hero {
      height: 60vh !important;
    }
  }

  @include media-breakpoint-down(xxs) {
    .hero {
      background: url('../assets/img/diarum-hero@0,75x.svg') no-repeat center center;
      height: 75vh;

      &__main {
        &__img {
          display: none;
        }

        &__text {
          &--big {
            font-size: 2em;
          }

          &--small {
            font-size: 1.2em;
            width: 70%;
            margin-top: 10px;
          }
        }
      }
    }
  }

  @include media-breakpoint-down(xs) {
    .hero {
      background: url('../assets/img/diarum-hero@0,75x.svg') no-repeat center center;
      height: 60vh;

      &__main {
        &__img {
          display: none;
        }

        &__text {
          &--big {
            font-size: 2.3em;
          }

          &--small {
            font-size: 1.2em;
            width: 70%;
            margin-top: 10px;
          }
        }
      }
    }
  }

  @include media-breakpoint-down(sm) {
    .hero {
      background: url('../assets/img/diarum-hero@0,75x.svg') no-repeat center center;
      height: 70vh;

      &__main {
        &__img {
          display: none;
        }

        &__text-div {
          margin-top: -130px;
        }

        &__text {
          &--big {
            font-size: 2.8em;
          }

          &--small {
            font-size: 1.4em;
            width: 70%;
            margin-top: 10px;
          }
        }
      }
    }
  }

  @include media-breakpoint-down(md) {
    .hero {
      background: url('../assets/img/diarum-hero@0,75x.svg') no-repeat center center;
      height: 60vh;

      &__main {
        &__img {
          display: none;
        }

        &__text {
          &--big {
            font-size: 3.2em;
          }

          &--small {
            font-size: 1.4em;
            width: 70%;
            margin-top: 10px;
          }
        }
      }
    }
  }

  @include media-breakpoint-down(lg) {
    .hero {
      background: url('../assets/img/diarum-hero@0,75x.svg') no-repeat center center;
      height: auto;

      &__main {
        &__img {
          width: 350px;
          height: 413px;
          padding-left: 0;
        }

        &__text {
          &--big {
            font-size: 2.8em;
          }

          &--small {
            font-size: 1.4em;
            width: 70%;
            margin-top: 10px;
          }
        }
      }
    }
  }
</style>
