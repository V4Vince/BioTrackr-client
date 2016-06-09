import Model from 'ember-data/model';
import attr from 'ember-data/attr';
// import { hasMany } from 'ember-data/relationships';

export default Model.extend({
  symptom: attr('string'),
  date: attr('string'),
  details: attr('string'),
});
