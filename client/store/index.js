export const state = () => ({
  user: {},
});

export const mutations = {
  setUser(state, payload) {
    state.user = payload;
  },
};
