import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    createEntry(data){
      let entry = this.get('store').createRecord('record', data);
      return entry.save();
    }
  },

});
