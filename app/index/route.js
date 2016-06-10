import Ember from 'ember';

export default Ember.Route.extend({
  user: Ember.computed.alias('auth.credentials.email'),
  isAuthenticated: Ember.computed.alias('auth.isAuthenticated'),
});
