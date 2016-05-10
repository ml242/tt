import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    newColumn(){
      debugger;
      var newColumn = $('input').val();
      var id = Math.floor( Math.random() * 10000000 );
      this.store.createRecord('column', {name: newColumn, id: id});
      $('input').val('')
    },
    newCard(){
    	alert();
    }
  }
});
