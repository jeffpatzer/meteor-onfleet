Package.describe({
  name: 'jeffpatzer:onfleet',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'OnFleet API for Meteor',
  // URL to the Git repository containing the source code for this package.
  git: 'git@github.com:jpatzer/meteor-onfleet.git',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.addFiles('onfleet.js', 'server');
  api.addFiles([
    'resources/administrators.js',
    'resources/destinations.js',
    'resources/organizations.js',
    'resources/recipients.js',
    'resources/tasks.js',
    'resources/teams.js',
    'resources/workers.js',
  ], 'server');

  if (api.export) {
    api.export('OnFleetAPI');
  }
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('jpatzer:onfleet');
  api.addFiles(['tests/server.js'], 'server');
});
