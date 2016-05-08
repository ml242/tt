import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    addColumn(){
      
      var name = $('input').val();

      debugger;
      
      var column = this.store.createRecord('column', {
  			title: name
			});

			column.save(); 

    
    }
  }
}); 
