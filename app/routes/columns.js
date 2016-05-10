import Ember from 'ember';

export default Ember.Route.extend({
	model(){
		const store = this.get('columns');
		return store
	},
	store: Ember.inject.service('store')
});
