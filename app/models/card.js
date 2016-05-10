import Model from 'ember-data/model';
import attr from 'ember-data/attr';

// export default Model.extend({
//   title: attr(),
//   description: attr(),
//   completed: false
// });

import Ember from 'ember'

export default Ember.Object.extend({
	id: attr(":id"),
	parent_id: attr(':column_id'),
	title: attr(),
	description: 	attr(),
	completed: false
})