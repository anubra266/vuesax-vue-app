export default {
  changeTheme: (state, { theme }) => (state.theme = theme),
  toggleSidebar: (state) => (state.activeSidebar = !state.activeSidebar),
  setActive: (state, payload) => (state.active = payload),
};
