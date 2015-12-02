Template.scheduler.onRendered(function () {
	let scheduler = new Scheduler(this.data.options);
	this.$('.scheduler__container').append(scheduler.generateTableAsHTML());
});

Template.scheduler.events({
	'click .scheduler__button': function (e) {
		$(e.currentTarget).toggleClass('schedular__active');
	}
});