var ViewModel = function() {

	this.clickCount = ko.observable(0);
	this.name = ko.observable('Tommy');
	this.imgSrc = ko.observable('img/cat1.jpg');
	this.imgAttribution = ko.observable('www.fakeurl2.org');
	this.level = ko.computed(function() {
		var level;
		var clicks = this.clickCount();
		if (clicks < 20) {
			level = 'Newborn';
		} else if (clicks < 50) {
			level = 'Adolescent';
		} else if (clicks < 100) {
			level = 'Super Kitty';
		} else {
			level = 'Ninja';
		}
		return level;
		}, this);
	
	this.nicknames = ko.observableArray([ 'Paws', 'Catherine', 'Scratches', 'Davies', 'Stephen' ]);
	this.incrementCounter = function() {
		this.clickCount(this.clickCount() + 1);
	};
}


	


ko.applyBindings(new ViewModel());
