import Ember from 'ember';

export default Ember.Route.extend({
  auth: Ember.inject.service(),
  flashMessages: Ember.inject.service(),

  actions: {
    signIn (credentials) {
      console.log(credentials);
      return this.get('auth').signIn(credentials)
      .then(() => this.transitionTo('record'))
      .then(() => this.get('flashMessages').success('Hi there!'))
      .catch(() => {
        this.get('flashMessages')
        .danger('Looks like somthing went wrong');
      });
    },
  },
});
