<template lang="pug">
  div
    .plex-sans.wrap.shadow(style="")
      .light-blue.lighten-4
        .row(style="margin-bottom: 0")
          .col.s12
            .col.s12.blue-text.text-darken-2
              h5(style="margin-bottom: 0") {{title}}
              p(style="margin-top: 0.5rem").grey-text.text-darken-3 Report generated on {{timestamp}}
      .white
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

      .white
        .row(style="margin-bottom: 0; padding-bottom: 1rem")
          .col.s12
            .col.s12
              h5(style="padding-top: 1rem") How this works
              p Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

              h5 Data we collect
              p Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    
    .wrap(style="max-width: 40rem;")
      .row
        .col.s12
          .col.s12.grey-text.text-lighten-1.center
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
    box-shadow: 
      rgba(0, 0, 0, 0.2) 0 0 0 1px, 
      rgba(0, 0, 0, 0.45) 0 1px 3px;
  }

  .plex-mono {font-family: 'IBM Plex Mono', monospace;}
  .plex-sans {font-family: 'IBM Plex Sans', sans-serif;}
  .lato {font-family: 'Lato', sans-serif;}
</style>