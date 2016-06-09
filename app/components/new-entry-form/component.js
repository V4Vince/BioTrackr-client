import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'form',
  //submit <-invisible
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
