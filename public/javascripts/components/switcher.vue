<template lang="pug">
  div(
    v-if="isLoading"
  )
    preload()
  div(
    v-else
  )
    div(
      v-if="report"
    )
      demo(
        :title='title'
      )
    div(
      v-else
    )
      loading(
        :title='title'
      )
</template>

<script>
  module.exports = {
    props: [ 'title', 'savedReport', 'savedTimestamp', 'report', 'pathname', 'isLoading' ],

    mounted() {
      const { report } = this;

      if (this.isLoading) {
        this.$store.dispatch('SET_INITIAL_STATE_FROM_PROPS', {
          report: this.savedReport,
          timestamp: this.savedTimestamp,
        }); 
      }
    },
    
    computed: {
      report() {
        return this.$store.getters.REPORT;
      },
      pathname() {
        return this.$store.getters.PATH_NAME;
      },
      isLoading() {
        return this.$store.getters.IS_LOADING;
      },
    }
  };
</script>

<style lang="scss">
</style>