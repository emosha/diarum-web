<template>
  <div class="nav">
    <div class="logo">
      <!-- <img /> -->
    </div>
    <div>
      <a href="#" v-scroll-to="'#features'" class="navlink navlink--a">Features</a>
      <router-link to="/signin" class="navlink call-to-action">
        Signin
      </router-link>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Navbar extends Vue {}
</script>

<style scoped lang="scss">
  @import '@/assets/styles/mixins.scss';

  .nav {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background-image: transparent;
    padding: 20px 5px 0 10px;

    .logo {
      width: 150px;
      height: 52px;
      margin-top: -13px;
      margin-left: 5px;
      background: url('../assets/img/diarum-logo.svg') no-repeat center center;
    }

    .navlink:before {
      margin-right: 10px;
    }

    .navlink {
      position: relative;
      color: #deefed;
      margin: 15px;
      letter-spacing: 2.5px;
      text-decoration: none;
      text-transform: uppercase;
      font-weight: 600;
      font-size: 13px;
      transition: left .3s;
      left: 0;

      &:not(.call-to-action) {
        &:before {
          content: '';
          width: 117%;
          background-color: #ffbab8;
          position: absolute;
          top: 75%;
          display: block;
          bottom: 5%;
          left: 0;
          visibility: hidden;
          transition: 0.3s transform;
          transform: translateX(-30%);
        }
      }

      &:hover {
        left: 5px;

        &:not(.call-to-action) {
          &:before {
            visibility: visible;
            transform: translateX(-10%);
          }
        }
      }

      &.call-to-action {
        color: #5d59cb;
        padding: 10px 30px;
        background: linear-gradient( to left, #F5BDBA 50%,#deefed 50% );
        background-size: 200% 100%;
        background-position: right bottom;
        transition: .3s all ease;
        font-weight: 600;

        &:hover {
          left: 0;
          background-position: left bottom;
        }
      }
    }

    @include media-breakpoint-down(xxs) {
      .logo {
        margin-left: -8px;
        margin-top: -18px;
        background: url('../assets/img/diarum-logo-white@0,75x.svg') no-repeat center center;
      }

      .navlink--a {
        display: none;
      }
    }

    @include media-breakpoint-down(xs) {
      .logo {
        margin-left: -8px;
        margin-top: -18px;
        background: url('../assets/img/diarum-logo-white@0,75x.svg') no-repeat center center;
      }

      .navlink--a {
        display: none;
      }
    }

    @include media-breakpoint-down(sm) {
      .logo {
        width: 150px;
        height: 52px;
        margin-top: -13px;
        background: url('../assets/img/diarum-logo-white@0,75x.svg') no-repeat center center;
      }
    }

    @include media-breakpoint-down(md) {
      .logo {
        width: 150px;
        height: 52px;
        margin-top: -13px;
        background: url('../assets/img/diarum-logo-white.svg') no-repeat center center;
      }
    }

    @include media-breakpoint-down(lg) {
      .logo {
        width: 150px;
        height: 52px;
        margin-top: -13px;
        background: url('../assets/img/diarum-logo.svg') no-repeat center center;
      }
    }
  }
</style>