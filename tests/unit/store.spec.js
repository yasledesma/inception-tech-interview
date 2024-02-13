import Vuex from 'vuex';
import {store, UPDATE_HEADERS, UPDATE_USERS, UPDATE_ERROR, errorMessage } from '@/store';

import { createLocalVue } from '@vue/test-utils'
import { cloneDeep } from 'lodash'

describe('Mutations', () => {
  let mockStore;

  beforeEach(() => {
    const localVue = createLocalVue()
    localVue.use(Vuex)
    mockStore = new Vuex.Store(cloneDeep(store))
  });
    
  test('should update the headers correctly', () => {
    const payload = ['name', 'email'];
      
    expect(mockStore.state.loading).toBe(true)
      
    mockStore.commit(UPDATE_HEADERS, payload)
      
    expect(mockStore.state.loading).toBe(false)
    expect(mockStore.state.headers).toEqual(payload);
  })

  it('should update the users correctly', () => {
    const payload = [{
      id: 1,
      first_name: "Jane",
      last_name: "Doe",
      username: "jane.doe",
      email: "jane.doe@email.com",
    }];
      
    mockStore.commit(UPDATE_USERS, payload);

    expect(mockStore.state.users).toEqual(payload);
  });

  it('should update the error correctly', () => {
    const error = new Error('whatever error message is okay.');
    mockStore.commit(UPDATE_ERROR, error);

    expect(mockStore.state.loading).toBe(false);
    expect(mockStore.state.message).toEqual(errorMessage);
  });
});

