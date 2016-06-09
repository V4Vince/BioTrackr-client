import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'form',
  entryParams: {},

  actions:{
    // submit(){
    //   let update = this.get('entryParams');
    //   this.sendAction('change', update);
    // },
    actions: {
    toggleDone(){
      //finds the item id and the store. It is then saved in variable ID and STORE
      let id = this.get('item.id');
      let store = this.get('store');

      //finds the 'item' with the item's ID
      store.findRecord('item', id)
      //when item is returned, toggle the 'done' property then return that item with the new toggled property.
      .then((item) => {
        item.toggleProperty('done');
        return item;
      })
      //when thats done, save the item to the API
      .then((item) => item.save());
    },

    delete(){
      this.get('item').destroyRecord();
    },

  },
  },
});
