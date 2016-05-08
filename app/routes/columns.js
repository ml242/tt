import Ember from 'ember';



export default Ember.Route.extend({

	model() {
		return [];
	},

   store: Ember.inject.service('store')

});
