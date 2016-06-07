import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'form',
  classNames: [''],

  entryParams: {},

  actions: {
    submit () {
      this.sendAction('submit', this.get('entryParams'));
    },

    reset () {
      this.set('entryParams', {});
    },
  },
});
