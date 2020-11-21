export default {
  changeTheme: ({ commit }, payload) => commit("changeTheme", payload),
  toggleSidebar: ({ commit }) => commit("toggleSidebar"),
  setActive: ({ commit }, payload) => commit("setActive", payload),
};
