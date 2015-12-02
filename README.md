# schedule-picker

schedule-picker is a Meteor package which provides a table-based user interface for picking timeslots inside a user-defined timeframe.

### Usage

1. Add the package to your application

        meteor add brewhk:schedule-picker

2. Create a template helper with your preferred options

        Template.setupSchedule.helpers({
            scheduleOptions: function () {
                return {
                    id: "setupScheduler",
                    class: "scheduler",
                    template: "week",
                    dayStart: 6,
                    dayEnd: 23,
                    weekStart: "Sunday",
                    weekEnd: "Saturday",
                    buttons: true
                }
            }
        });

3. Add the `{{> scheduler}}` template into your template.

        {{> scheduler options=scheduleOptions}}

4. To get the data back from the table, use the `getData()` method, passing in the `table` element.

        Scheduler.getData(Template.instance().find('#setupScheduler'))

### Options

This package is a work in progress, defaults may be added later.

| Option Key | Description                                                                                      | Valid Values                                                                                                | Default | Mandatory |
|------------|--------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------|---------|-----------|
| id         | ID attribute of the table                                                                        | Any [valid HTML id](http://www.w3.org/TR/html5/dom.html#the-id-attribute)                                   | -       | No        |
| class      | Class attribute of the table                                                                     | Any [valid HTML class](http://www.w3.org/TR/html5/dom.html#classes)                                         | -       | No        |
| template   | The template to use                                                                              | "week"                                                                                                      | -       | Yes       |
| dayStart   | When the day starts                                                                              | 0 to 23 (0 is equivalent to 00:00:00)                                                                       | -       | Yes       |
| dayEnd     | When the day ends                                                                                | 0 to 23 (23 is equivalent to 23:59:59)                                                                      | -       | Yes       |
| weekStart  | When the week begins                                                                             | "Monday" to "Sunday", or "Mon" to "Sun", or 0 (Sunday) to 6 (Saturday), or "0" to "6". All case-insensitive | -       | Yes       |
| weekEnd    | When the week ends                                                                               | Same as weekStart                                                                                           | -       | Yes       |
| buttons    | Whether you want buttons to show in the table. Required if you are to use the `getData()` method | Boolean                                                                                                     | -       | Yes       |
