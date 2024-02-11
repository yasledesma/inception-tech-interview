
<script>
import DataTable from "../components/DataTable.vue";

export default {
  name: "Data",
    
  components: {
    DataTable,
  },
  data() {
      return {
          headers: [],
          payload: []
      }
  },
  async mounted() {
      const remove = {
          password: 1,
          uid: 1, 
          avatar: 1,
          gender: 1,
          phone_number: 1,
          employment: 1,
          address: 1,
          social_insurance_number: 1,
          date_of_birth: 1,
          credit_card: 1,
          subscription: 1
      };
      // TODO: move this request to a global state store so it can be cached someway
      try {
          const res = await fetch(`${process.env.VUE_APP_API_BASE_URL}${process.env.VUE_APP_API_RESOURCE}?size=100`);
          const data = await res.json();
          
          this.headers = Object.keys(data[0])
                            .filter(item => !remove[item])
                            .map(key => {
                                 return {
                                     text: this.formatHeader(key),
                                     value: key
                                 };
                             });
          this.payload = data;
      } catch(e) {
          // TODO: manage this error properly
          console.error(e);
      };
  },
  methods: {
      formatHeader(val) {
          return val[0].toUpperCase() + val.substring(1).replace('_', ' ');
      }
  }
};
</script>

<template>
  <DataTable
    :headers="headers"
    :payload="payload"
    d-xs
  />
</template>
