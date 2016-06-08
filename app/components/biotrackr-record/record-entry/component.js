import Ember from 'ember';

export default Ember.Component.extend({
  actions:{
    delete(){
      let entry = this.get('single-entry');
      this.sendAction('submit', entry);
    },
  },
});
