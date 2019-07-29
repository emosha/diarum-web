<template>
  <div class="arrow">
    <a href="#" v-scroll-to="href" class="arrow__link">
      <div class="arrow__container">
        <font-awesome-icon :icon="icon"/>
      </div>
    </a>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component

export default class Arrow extends Vue {
  @Prop() public href: string|undefined;
  @Prop() public direction: string|undefined;
  public icon = `chevron-${this.direction}`;
}
</script>

<style scoped lang="scss">
@keyframes jump {
  0% {
    top: 0px;
  }
  50% {
    top: 30px;
  }
  100% {
    top: 0px;
  }
}

.arrow {
  &__container {
    position: relative;
    animation: jump 3s infinite;

    .svg-inline--fa {
      font-size: 40px;
      color: #5d59cb;
    }
  }
}
</style>
