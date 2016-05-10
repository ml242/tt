import Ember from 'ember';

export default Ember.Controller.extend({
	actions: {
      newCard(){     
        debugger;

        let parent = this.column.id;
        let description = this.newCardText;

        this.store.createRecord('card', {description: description, parent_id: id});
      
        debugger;
        this.newCardText = '';
      }
	}
});
