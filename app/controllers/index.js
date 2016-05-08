import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    newColumn(){
      debugger;

      var newColumn = $('input').val()

      this.store.createRecord('column', {name: newColumn});

      $('input').val('')

    }
  }
});
