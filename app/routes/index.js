import Ember from 'ember';

var columns = {
	id: 2,
	description: "!212121212",
	name: "asfasafad",
	isArchived: false
}

export default Ember.Route.extend({
	 model() {
    // return this.store.findAll('column');
    return columns;
  }
});
