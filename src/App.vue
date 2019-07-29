<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css?family=Open+Sans:300,400,400i,600,700');

  body {
    margin: 0;
    padding: 0;
  }
  #app {
    font-family: 'Open Sans', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  .btn {
    color: #5d59cb;
    padding: 10px 30px;
    background: linear-gradient( to left, #F5BDBA 50%,#deefed 50% );
    background-size: 200% 100%;
    background-position: right bottom;
    transition: .3s all ease;
    text-decoration: none;
    text-transform: uppercase;
    letter-spacing: 2.5px;
    font-weight: 600;

    &:hover, &:focus {
      left: 0;
      background-position: left bottom;
    }
  }
</style>
