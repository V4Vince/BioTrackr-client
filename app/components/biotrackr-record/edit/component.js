import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service(),
  tagName: 'form',
  entryParams: {},
  //entry: <-- invisible
  actions:{
    submit(){
      let id = this.get('entry.id');
      let store = this.get('store');
      let entryParams = this.get('entryParams.details');
      store.findRecord('record', id)
      .then((entry) => {
        entry.set('details', entryParams);
        return entry;
      })
      //when thats done, save the item to the API
      .then((entry) => entry.save())
      .then(() => this.set('entryParams', {}));
    },

    reset () {
      this.set('entryParams', {});
    },
  },
});
