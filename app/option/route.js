import Ember from 'ember';

export default Ember.Route.extend({
  auth: Ember.inject.service(),
  flashMessages: Ember.inject.service(),
  store: Ember.inject.service(),

  actions: {
    signOut () {
      this.get('auth').signOut()
      .then(() => this.transitionTo('/index'))
      .then(() => {
        this.get('flashMessages').warning('Have a great day!');
      })
      .catch(() => {
        this.get('flashMessages')
        .danger('Looks like you\'re not signed in');
      });
      this.store.unloadAll();
    },

    error (reason) {
      let unauthorized = reason.errors.some((error) =>
        error.status === '401'
      );

      if (unauthorized) {
        this.get('flashMessages')
        .danger('You forgot to sign in');
        this.transitionTo('/sign-in');
      } else {
        this.get('flashMessages')
        .danger('Something went wrong');
      }

      return false;
    },
  },
});
