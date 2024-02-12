<script>
export default {
  name: "DataTable",
  
  props: {
    headers: {
        type: Array,
        required: true
    },
    users: {
        type: Array,
        required: true
    },
    loading: {
        type: Boolean,
        required: true
    },
    message: {
        type: String,
        required: true
    },
  },
  data() {
      return {
          search: '',
      }
  },
};
</script>

<template>
  <v-container
    fluid
    ma-2
    mb-4
  >
    <v-row>
      <v-card width="99vw">
        <v-card-title>
          Cat app users
        </v-card-title>
        <v-card-subtitle>
          <p>
            All these people have cats! Grab their emails and say hi! 
          </p>
        </v-card-subtitle>
        <v-data-table
          dense
          :loading="loading"
          :loading-text="message"
          :headers="headers"
          :items="users"
          class="elevation-1"
          :items-per-page="20"
          :search="search"
        >
          <template v-slot:top>
            <v-text-field
              v-model="search"
              label="Search"
              class="mx-4"
            />
          </template>
        </v-data-table>
      </v-card>
    </v-row>
  </v-container>
</template>
users
