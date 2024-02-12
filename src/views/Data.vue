<script>
import DataTable from "../components/DataTable.vue";

export default {
  name: "Data",
    
  components: {
    DataTable,
  },
  computed: {
    headers() {
        return this.$store.state.headers;
    },
    users() {
      return this.$store.state.users;
    },
    loading() {
      return this.$store.state.loading;
    },
    message() {
      return this.$store.state.message;
    }
  }, 
  mounted() {
      this.$store.dispatch('fetchUsers');
  },
    
};
</script>

<template>
  <DataTable
    d-xs
    :headers="headers"
    :users="users"
    :loading="loading"
    :message="message"
  />
</template>

