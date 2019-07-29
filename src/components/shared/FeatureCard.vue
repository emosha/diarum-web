<template>
  <div class="feature-card">
    <embed :src="getIcon(icon)" />
    <div class="feature-card__text">
      {{text}}
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component

export default class FeatureCard extends Vue {
  @Prop() public text: string|undefined;
  @Prop() public icon: string|undefined;

  public getIcon(path: string) {
    return require(`@/assets/img/card-swiggle-with-${path}@0,25x.svg`);
  }
}
</script>

<style scoped lang="scss">
.feature-card {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  background-color: white;
  border-radius: 10px;
  min-height: 300px;
  min-width: 300px;
  box-shadow: 0 0 24px rgba(91, 94, 222, 0.16);

  &__text {
    font-size: 1.2em;
    text-transform: uppercase;
    letter-spacing: 1.5px;
  }

  img {
    width: 100px;
    height: 100px;
  }
}
</style>
