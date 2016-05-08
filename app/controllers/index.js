import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
<<<<<<< HEAD
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
=======
    newColumn(){
      debugger;

      var newColumn = $('input').val()

      this.store.createRecord('column', {name: newColumn});

      $('input').val('')

    }
  }
});
>>>>>>> oldmess
