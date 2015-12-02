Package.describe({
  name: 'brewhk:scheduler',
  version: '1.0.1',
  summary: 'Provides a table-based user interface for picking timeslots inside a user-defined timeframe.',
  git: 'https://github.com/brewhk/scheduler.git',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.use('ecmascript');
  api.use('templating');
  api.addFiles('scheduler.html', 'client');
  api.addFiles('scheduler.js', 'client');
  api.addFiles('scheduler-events.js', 'client');
  api.export('Scheduler', 'client');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('brewhk:scheduler');
  api.addFiles('scheduler-tests.js');
});
