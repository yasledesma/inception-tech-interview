<script>
  export default {
    name: "Footer",
  };
</script>

<template>
  <v-footer
    app
    dark
    padless
    absolute
  >
    <v-card
      class="flex"
      flat
      tile
    >
      <v-card-text class="py-2 white--text text-center">
        {{ new Date().getFullYear() }} — <strong>Made with Vue</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

