import Ember from 'ember';

export default Ember.Component.extend({
	isAdding: false,
	isEditing: false,
	menuOpen: false,
	actions: {
        addCard() {
          this.set('isAdding', true);
        },
        cancelCard(){
        	this.set('isAdding', false);
        },
        toggleEditing() {
          this.toggleProperty('isEditing');
        },
        getMenu() {
        	this.toggleProperty('menuOpen');
        },
        hideColumn() {
        	this.column.set('isArchived', true)
    		},
        newTitle() {
        	// would like to abstract this to edit each form field, not sure how
        	this.toggleProperty('isEditing');
        	this.set(name, this.childViews[0].value);
        },
        newColumn(){
            debugger;
        }
  }
});
