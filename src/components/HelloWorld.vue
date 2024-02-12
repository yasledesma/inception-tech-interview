<script>
export default {
  name: "HelloWorld",

  data: () => ({
    ecosystem: [
      {
        text: "Vue",
        href: "https://v2.vuejs.org",
      },
      {
        text: "Vuetify",
        href: "https://v2.vuetifyjs.com",
      },
      {
        text: "Vuex",
        href: "https://v3.vuex.vuejs.org",
      },
      {
        text: "Vue Router",
        href: "https://v3.router.vuejs.org",
      },
    ],
    importantLinks: [
      {
        text: "vuetify-loader",
        href: "https://github.com/vuetifyjs/vuetify-loader",
      },
      {
        text: "IndexedDB docs",
        href: "https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API",
      },
      {
        text: "Service Workers docs",
        href: "https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API/Using_Service_Workers",
      },
    ],
    whatsNext: [
      {
        text: "Explore components",
        href: "https://vuetifyjs.com/components/api-explorer",
      },
      {
        text: "Select a layout",
        href: "https://vuetifyjs.com/getting-started/pre-made-layouts",
      },
      {
        text: "awesome-vuetify",
        href: "https://github.com/vuetifyjs/awesome-vuetify",
      },
    ],
  }),
};
</script>

<template>
  <v-container>
    <v-row>
      <v-col
        xs="12"
        lg="6"
      >
        <h2>Welcome to the Tech Interview</h2>
        Youre doing great so far. Keep it up.
        <v-img
          alt="Cat with hat"
          class="shrink mr-2"
          contain
          src="../assets/catmeme.jpg"
          transition="scale-transition"
          width="100%"
        />
      </v-col>
      <v-col
        xs="12"
        lg="6"
      >
        <h2>Resources</h2>
        <v-container>
          <h3>Ecosystem</h3>
          <v-container
            v-for="item in ecosystem"
            :key="item.text"
          >
            <v-row>
              <a
                :href="item.href"
                target="_blank"
              >
                {{ item.text }}
              </a>
            </v-row>
          </v-container>
        </v-container>
        <v-container>
          <h3>Important links</h3>
          <v-container
            v-for="item in importantLinks"
            :key="item.text"
          >
            <v-row>
              <a
                :href="item.href"
                target="_blank"
              >
                {{ item.text }}
              </a>
            </v-row>
          </v-container>
        </v-container>
        <v-container>
          <h3>What's next</h3>
          <v-container
            v-for="item in whatsNext"
            :key="item.text"
          >
            <v-row>
              <a
                :href="item.href"
                target="_blank"
              >
                {{ item.text }}
              </a>
            </v-row>
          </v-container>
        </v-container>
      </v-col>
    </v-row>
  </v-container>
</template>

