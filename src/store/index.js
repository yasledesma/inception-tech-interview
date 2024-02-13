import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const UPDATE_HEADERS = 'UPDATE_HEADERS';
export const UPDATE_USERS = 'UPDATE_USERS';
export const UPDATE_ERROR = 'UPDATE_ERROR';
export const errorMessage = "An error has ocurred while trying to fetch the data.";
export const successMessage = "Success!";

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

function formatHeaders(val) {
    return Object.keys(val[0]).filter(item => !remove[item])
                              .map(key => {
                                return {
                                  text: formatHeader(key),
                                  value: key
                                };
                              });
};

function formatHeader(val) {
    return val[0].toUpperCase() + val.substring(1).replace('_', ' ');
};

export const store = {
  name: "store",
    
  state: {
      headers: [],
      users: [],
      message: "Loading...",
      loading: true
  },
  mutations: {
      [UPDATE_HEADERS](state, payload) {
          state.loading = false;
          state.message = successMessage;
          state.headers = payload;
      },
      [UPDATE_USERS](state, payload) {
          state.users = payload;
      },
      [UPDATE_ERROR](state, error) {
          console.error(error);
          state.loading = false;
          state.message = errorMessage;
      }
      
  },
  actions: {
      async fetchUsers(context) {
        try {
          const res = await fetch(`${process.env.VUE_APP_API_BASE_URL}${process.env.VUE_APP_API_RESOURCE}?size=100`);
          const data = await res.json();

          context.commit('UPDATE_HEADERS', formatHeaders(data));
          context.commit('UPDATE_USERS', data);
        } catch(e) {
            context.commit('UPDATE_ERROR', e);
        } 
      },
  },
  modules: {},
}

export default new Vuex.Store(store);

