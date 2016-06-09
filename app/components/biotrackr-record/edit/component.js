import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'form',
  patchParams: {},

  actions:{
    // submit(){
    //   let update = this.get('patchParams');
    //   this.sendAction('change', update);
    // },
    submit(){
      let id = this.get('single-entry.id');
      console.log("this is the ID from edit" + id);
      let store = this.get('store');

      store.findRecord('single-entry', id)
      .then((record) => {
        record.set('details', store.get('patchParams'));
        return record;
      })
      //when thats done, save the item to the API
      .then((item) => item.save());
    },

    delete(){
      this.get('item').destroyRecord();
    },
  },
});
