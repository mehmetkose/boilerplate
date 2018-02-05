import model from 'parket';

const App = model('App', { // name is used internally for serialization
  initial: () => ({
    name: null,
    isOffline: false,
  }),
  actions: state => ({
    setFirstName (first) {
      state.firstname = first; // no set state, no returns to merge, it's reactive™
    },
    setIsOffline (isOffline) {
      state.isOffline = isOffline; // no set state, no returns to merge, it's reactive™
    },
  }),
  views: state => ({
    fullname: () => `${state.name} ${state.name}`, // views are computed properties
  }),
});

export default {App}
