var ViewModel = function() {
	var self = this;  //  Prevents ambiguity in the event of nested binding contexts and functions
	self.currentCat = ko.observable( new Cat() );
	
	this.incrementCounter = function() {
		self.currentCat().clickCount(self.currentCat().clickCount() + 1);
	};
}
//  The binding contexts referenced in the html determine how observables should be referenced 
//  In the code.  Furthermore, the meaning of 'this' changes as you nest functions, and the need to 
//  Reference parents changes as you nest binding contexts.  
//  Redefining 'this' as 'self' can also help prevent ambiguity with the keyword 'this'
var Cat = function() {
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
}


	


ko.applyBindings(new ViewModel());
