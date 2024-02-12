<script>
export default {
    name: "Navbar",
    data() {
        const opts = [
            {name: "Home", path: "/"},
            {name: "About", path: "/about"},
            {name: "Data", path: "/data"},
        ];
        
        const model = opts.map(opt => opt.path).indexOf(window.location.pathname);
        
        return {
            opts,
            model
        }
    },
    methods: {
        go(path) {
            this.$router.push(path);
        },
    }
}
</script>

<template>
  <v-app-bar
    app
    color="green"
    hide-on-scroll
  >
    <v-list 
      color="green"
      dense
      class="d-flex flex-row"
    >
      <v-icon
        x-large
        class="mr-3"
      >
        mdi-cat
      </v-icon>
      
      <!-- TODO: maybe move this into a hamburger menu for mobile? -->
      <v-list-item-group
        v-model="model"
        group="main"
        mandatory
        class="d-flex flex-row"
      >
        <v-list-item
          v-for="opt in opts"
          :key="opt.name"
          v-on:click="go(opt.path)"
          v-on:keyup.enter="go(opt.path)"
        >
          <v-list-item-title>
            {{ opt.name }}
          </v-list-item-title>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-app-bar>
</template>

