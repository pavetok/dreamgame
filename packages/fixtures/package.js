Package.describe({
  name: 'pavetok:fixtures',
  version: '0.0.1',
  summary: 'Useful fixtures for tests',
  debugOnly: true,
  git: '',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  api.addFiles('fixtures.js', 'server');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('pavetok:fixtures');
  api.addFiles('fixtures-tests.js');
});
