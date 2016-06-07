import Ember from 'ember';

export default Ember.Component.extend({
  actions:{
    delete(){
      this.get('single-entry').destroyRecord();
      
    },
    store: Ember.inject.service(),
  }
});
