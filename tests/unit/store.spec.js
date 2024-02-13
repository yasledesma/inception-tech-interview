import Vuex from 'vuex';
import {
    store,
    UPDATE_HEADERS,
    UPDATE_USERS,
    UPDATE_ERROR,
    formatHeaders,
    successMessage,
    errorMessage
} from '@/store';
import { createLocalVue } from '@vue/test-utils'
import { cloneDeep } from 'lodash'


const headers = ['name', 'email'];
const users = [{
  id: 1,
  first_name: "Jane",
  last_name: "Doe",
  username: "jane.doe",
  email: "jane.doe@email.com",
}];

global.fetch = jest.fn(() => Promise.resolve({
  json: () => Promise.resolve(users),
}));


describe('Mutations', () => {
  let mockStore;

  beforeEach(() => {
    const localVue = createLocalVue()
    localVue.use(Vuex)
    mockStore = new Vuex.Store(cloneDeep(store))
  });
    
  test('should update the headers correctly', () => {
    expect(mockStore.state.loading).toBe(true)
      
    mockStore.commit(UPDATE_HEADERS, headers)
      
    expect(mockStore.state.loading).toBe(false)
    expect(mockStore.state.headers).toEqual(headers);
  })

  it('should update the users correctly', () => {
    mockStore.commit(UPDATE_USERS, users);

    expect(mockStore.state.users).toEqual(users);
  });

  it('should update the error correctly', () => {
    const error = new Error('whatever error message is okay.');
    mockStore.commit(UPDATE_ERROR, error);

    expect(mockStore.state.loading).toBe(false);
    expect(mockStore.state.message).toEqual(errorMessage);
  });
});

