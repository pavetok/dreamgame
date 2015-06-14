Package.describe({
  name: "pavetok:fixtures",
  summary: "Useful fixtures for tests",
  version: "0.0.1",
  git: "",
  debugOnly: true
});

Package.onUse(function(api) {
  api.versionsFrom("1.1.0.2");

  api.addFiles("fixtures.js", "server");
  api.addFiles("database.js");

  api.export("Database");
});

Package.onTest(function(api) {
  api.use("tinytest");
  api.use("pavetok:fixtures");
  api.addFiles("tests.js");
});
