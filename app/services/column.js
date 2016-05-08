import Ember from 'ember';
import Column from 'app/models/column';

const columns = [
	Columns.create({
		name: 'dev',
		id: 1,
		description: "testingasd;ogjadgadg",
		isArchived: false
	})
]

export default Ember.Service.extend({
	 // getOrderById(id) { /* ... */ },
  //  getOrders() { /* ... */ }
  getColumns() { return columns; }
});
