import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('biotrackr-record/edit', 'Integration | Component | biotrackr record/edit', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{biotrackr-record/edit}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#biotrackr-record/edit}}
      template block text
    {{/biotrackr-record/edit}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
