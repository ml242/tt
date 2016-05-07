import Ember from 'ember';
import Model from 'ember-data/model';
import attr from 'ember-data/attr';

export default Model.extend({
  name: attr(),
  isArchived: attr(),
  description: attr(),
  cards: attr()
});

