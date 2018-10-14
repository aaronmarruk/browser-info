<template lang="pug">
  .component-demo
    .card-panel.white
      h1 PRE LOAD

</template>

<script>
  module.exports = {
    mounted() {
      console.log('PRE LOAD MOUNT');
    }
  };
</script>

<style lang="scss">
  .component-demo {
    display: block;
    border: 2px solid yellow;
    padding: 0 1rem 1rem;

    &:before {
      content:"Server-rendered Vue component";
      background: yellow;
      text-transform: lowercase;
      font-family: monospace;
      padding: 0.5rem;
      top: -0.2rem;
      position: relative;
      font-size: 0.8rem;
      left: -1.1rem;
    }
  }
</style>