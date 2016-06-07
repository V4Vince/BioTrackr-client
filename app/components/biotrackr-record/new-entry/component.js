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


// actions:{
//   submit(item){
//     //Ember.set 's first argument is what youre trying to mutate. The secnod arugemnt is what youre mutating it into.'
//     Ember.set(item, 'list', this.get('list'));
//     this.sendAction('submit', this.get('form'));
//   },
// }
