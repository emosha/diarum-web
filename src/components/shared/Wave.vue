<template>
  <div :class="classes">
    <svg viewBox="0 0 500 150" preserveAspectRatio="none">
      <path d="M0.00,92.27 C216.83,2.39 304.30,232.92 500.00,92.27 L500.00,0.00 L0.00,0.00 Z" style="stroke: none;fill: #5d59cb;"></path>
    </svg>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component

export default class Wave extends Vue {
  @Prop() public classes: string|undefined;
}
</script>

<style scoped lang="scss">
  svg {
    height: 100%;
    width: 100%;
    transform: rotate(180deg);
  }
</style>
