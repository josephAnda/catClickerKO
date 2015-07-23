var ViewModel = function() {
	this.clickCount = ko.observable(0);
	this.name = ko.observable('Tommy');
	this.imgSrc = ko.observable('img/cat1.jpg');
	this.imgAttribution = ko.observable('www.fakeurl2.org');

	this.incrementCounter = function() {
		this.clickCount(this.clickCount() + 1);
	};
}

ko.applyBindings(new ViewModel());