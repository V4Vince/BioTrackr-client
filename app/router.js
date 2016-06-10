import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
});

Router.map(function () {
  this.route('sign-up');
  this.route('sign-in');
  this.route('change-password');
  this.route('users');
  this.route('record');
  this.route('record-entry', { path: '/record/:entry_id' });
  this.route('new-entry', { path: '/record/new' });
  this.route('edit');
  this.route('option');
});

export default Router;
