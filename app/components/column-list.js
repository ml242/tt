import Ember from 'ember';

export default Ember.Component.extend({
	isAdding: false,
	isEditingTitle: false,
  isEditingDescription: false,
	menuOpen: false,
	actions: {
        addCard() {
          this.set('isAdding', true);
        },
        cancelCard(){
        	this.set('isAdding', false);
        },
        toggleEditing() {
          this.toggleProperty('isEditingTitle');
        },
        toggleEditingDescription() {
          this.toggleProperty('isEditingDescription');
        },
        getMenu() {
        	this.toggleProperty('menuOpen');
        },
        hideColumn() {
        	this.column.set('isArchived', true)
		},
        newTitle() {
        	// would like to abstract this to edit each form field, not sure how
        	this.toggleProperty('isEditingTitle');
        	// this.set(name, this.childViews[0].value);
        },
        newDescription() {
            this.toggleProperty('isEditingDescription');
            // this.set(description, this.childViews[0].value);
        },
        
        newCard(){     
            
        // change the context to card here with a call?
          debugger;

          let parent = this.column.id;
          let description = this.newCardText;

          this.store.createRecord('card', {description: description, parent_id: id});
        
          debugger;
          this.newCardText = '';
        }

    }
});
