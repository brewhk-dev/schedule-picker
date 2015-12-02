Package.describe({
  name: 'brewhk:schedule-picker',
  version: '1.0.0',
  summary: 'Provides a table-based user interface for picking timeslots inside a user-defined timeframe.',
  git: 'https://github.com/brewhk-dev/schedule-picker.git',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.use('ecmascript');
  api.use('templating');
  api.addFiles('schedule-picker.html', 'client');
  api.addFiles('schedule-picker.js', 'client');
  api.addFiles('schedule-picker-events.js', 'client');
  api.export('Scheduler', 'client');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('brewhk:schedule-picker');
  api.addFiles('schedule-picker-tests.js');
});
