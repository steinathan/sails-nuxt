export const state = () => ({
  user: {},
  loading: false,
});

export const mutations = {
  setUser(state, payload) {
    state.user = payload;
  },
};
