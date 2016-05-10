import Ember from 'ember';

export default Ember.Controller.extend({

	actions: {
      newCard(){     

        // let parent = this.column.id;
        let description = this.newCardText;

        this.store.createRecord('card', {description: description});
        this.newCardText = '';
      }
	}

});
