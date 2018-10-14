<template lang="pug">
  div
    .plex-sans.container.shadow(style="max-width: 40rem; margin-top: 1rem; margin-bottom: 1rem; border-radius: 0.25em; overflow: hidden;")
      .light-blue.lighten-4
        .row(style="margin-bottom: 0")
          .col.s12
            .col.s12.blue-text.text-darken-2
              h5(style="margin-bottom: 0") {{title}}
              p(style="margin-top: 0.5rem").grey-text.text-darken-3 Report generated on {{timestamp}}
      .grey.lighten-3(style="border-top: 1px solid #fff;")
        .row(style="margin-bottom: 0")
          .col.s12
            .col.s12
              p 
                | Here's some information about your browser which should hopefully help resolve your tech support issue or bug.
      pre.blue-grey.darken-3(style="padding-bottom: 1rem; padding-top: 1rem; margin-top: 0; margin-bottom: 0")
        .row(style="margin-bottom: 0")
          .col.s12
            .col.s12
              code.grey-text.text-lighten-3.plex-mono
                | {{report}}

      .grey.lighten-3(style="border-top: 1px solid #fff;")
        .row(style="margin-bottom: 0")
          .col.s12
            .col.s12
              h4 About
              
              h5 How this works
              p Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

              h5 Data we collect
              p Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    
    .container(style="max-width: 40rem;")
      .row(style="margin-top: 0")
        .col.s12
          .col.s12.grey-text.text-lighten-1
            p A thing by 
              span.white-text Aaron Marr.
</template>

<script>
  module.exports = {
    props: [ 'title', 'report', 'timestamp' ],

    mounted() {
      const { report: { _id: id } } = this;

      if (id) {
        this.$router.push(`/report/${id}`);
      }
    },
    
    computed: {
      report() {
        return this.$store.getters.REPORT;
      },
      timestamp() {
        return this.$store.getters.TIMESTAMP;
      },
    }
  };
</script>

<style lang="scss">
  .shadow {
    box-shadow: rgba(0,0,0,0.2) 0 0 0 1px, rgba(0,0,0,0.45) 0 3px 10px;
  }
  .plex-mono {font-family: 'IBM Plex Mono', monospace;}
  .plex-sans {font-family: 'IBM Plex Sans', sans-serif;}
  .lato {font-family: 'Lato', sans-serif;}
</style>