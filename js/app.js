var ViewModel = function() {
	this.clickCount = ko.observable(0);
	this.name = ko.observable('Tommy');
	this.imgSrc = ko.observable('img/cat1.jpg');
	this.imgAttribution = ko.observable('www.fakeurl2.org');
	this.level = ko.observable('Newborn');

	this.incrementCounter = function() {
		this.clickCount(this.clickCount() + 1);
		
		if (this.clickCount() >= 20 && this.clickCount() < 50) {
			this.level('Adolescent');
		} else if (this.clickCount() >= 50 && this.clickCount() < 100) {
			this.level('Teen');
		} else if (this.clickCount() >= 100) {
			this.level('Super Kitty');
		}
	};
}

ko.applyBindings(new ViewModel());