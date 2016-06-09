import Ember from 'ember';

export default Ember.Route.extend({
  flashMessages: Ember.inject.service(),

  model: function(params){
    return this.get('store').findRecord('record', params.entry_id);
  },

  actions: {
    delete(entry){
      entry.destroyRecord()
      .then(() => {
        this.transitionTo('/record');
      })
      .then(() => {
        this.get('flashMessages').success('You\'ve deleted an entry.');
      });
    },
    // patch(data){
    //   let newDetails = this.get('store').set('single-entry', data);
    //   console.log(newDetails);
    //   return newDetails.save();
    // },
  },
});
