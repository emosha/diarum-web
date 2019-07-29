<template>
  <div class="footer" id="footer">
    <p class="footer">Made with <font-awesome-icon icon="heart" /> by Iveren</p>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component

export default class Footer extends Vue {}
</script>

<style scoped lang="scss">
  .footer {
    color: #5d59cb;
    margin-top: 150px;
  }
</style>
