/* eslint func-names: 0 */

Package.describe({
  name: 'fixtures',
  summary: 'Useful fixtures for tests',
  version: '0.0.1',
  debugOnly: true,
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.0.1');

  api.use('ecmascript');

  api.addFiles('fixtures.js', 'server');
  api.addFiles('database.js');
  api.addFiles('helper.js');

  api.export('Database');
  api.export('waitUntilSuccess');
});
