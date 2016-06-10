import Ember from 'ember';

export default Ember.Component.extend({
  flashMessages: Ember.inject.service(),
  tagName: 'form',
  classNames: ['form-horizontal'],

  passwords: {},

  actions: {
    submit: function () {
      this.sendAction('submit', this.get('passwords'));
      this.set('passwords', {});
      this.get('flashMessages').success('You\ve successfully changed your password');
    },

    reset () {
      this.set('passwords', {});
    },
  },
});
