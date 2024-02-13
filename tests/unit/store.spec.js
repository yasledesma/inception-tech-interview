import Vuex from 'vuex';
import store, { UPDATE_HEADERS, UPDATE_USERS, UPDATE_ERROR } from '@/store';

describe('Mutations', () => {
  let mockStore;

  beforeEach(() => {
    mockStore = new Vuex.Store(store);
    mockStore.replaceState({
        headers: [],
        users: [],
        message: "Loading...",
        loading: true
    });
  });

  it('should update the headers correctly', () => {
    const payload = ['name', 'email'];
    mockStore.commit(UPDATE_HEADERS, payload);

    expect(mockStore.state.loading).toBe(false);
    expect(mockStore.state.headers).toEqual(payload);
  });
    
  it('should update the users correctly', () => {
    const payload = [{
    id: 1,
    first_name: "Jane",
    last_name: "Doe",
    username: "jane.doe",
    email: "jane.doe@email.com",
    }];
      
    mockStore.commit(UPDATE_USERS, payload);

    expect(mockStore.state.loading).toBe(false);
    expect(mockStore.state.users).toEqual(payload);
  });

  it('should update the error correctly', () => {
    const error = new Error('whatever error message is okay.');
    mockStore.commit(UPDATE_ERROR, error);

    expect(mockStore.state.loading).toBe(false);
    expect(mockStore.state.message).toEqual("An error has ocurred while trying to fetch the data.");
  });
});
