Package.describe({
  name: 'fixtures',
  version: '0.0.1',
  debugOnly: true,
  summary: '',
  git: '',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  api.addFiles('fixtures.js');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('fixtures');
  api.addFiles('fixtures-tests.js');
});
