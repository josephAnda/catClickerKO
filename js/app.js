var initialCats = [{  
	clickCount: 0,
	name: 'Tommy',
	imgSrc: 'img/cat1.jpg',
	imgAttribution: 'http://fakeurl1.com',
	nicknames: [ 'Paws', 'Catherine', 'Scratches', 'Davies', 'Stephen' ]
	},
	{	
	clickCount: 0,
	name: 'Laurie',
	imgSrc: 'img/cat2.jpg',
	imgAttribution: 'http://fakeurl2.com',
	nicknames: [ 'Maxi', 'Talim', 'Taki', 'Mitsurugi', 'Cervantes' ]
	},
	{
	clickCount: 0,
	name: 'Sharon',
	imgSrc: 'img/cat3.jpg',
	imgAttribution: 'http://fakeurl3.com',
	nicknames: [ 'Squall', 'Zell', 'Irvine', 'Selphie', 'Quistis' ]
	},
	{
	clickCount: 0,
	name: 'Zeus',
	imgSrc: 'img/cat4.jpg',
	imgAttribution: 'http://fakeurl4.com',
	nicknames: [ 'Hera', 'Poseidon', 'Hades', 'Vulcan', 'Athena' ]
	},
	{
	clickCount: 0,
	name: 'Makoto',
	imgSrc: 'img/cat5.jpg',
	imgAttribution: 'http://fakeurl5.com',
	nicknames: [ 'Zidane', 'Quina', 'Vivi', 'Steiner', 'Garnet' ]
	}
]
var Cat = function(data) {
	this.clickCount = ko.observable(data.clickCount);
	this.name = ko.observable(data.name);
	this.imgSrc = ko.observable(data.imgSrc);
	this.imgAttribution = ko.observable(data.imgAttribution);
	this.nicknames = ko.observableArray(data.nicknames);
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
}
var ViewModel = function() {
	var self = this;  //  Prevents ambiguity in the event of nested binding contexts and functions

	self.catList = ko.observableArray([]);

	initialCats.forEach(function(catItem){
		self.catList.push( new Cat(catItem));
	});
	self.currentCat = ko.observable( self.catList()[0] );
	
	this.incrementCounter = function() {
		self.currentCat().clickCount(self.currentCat().clickCount() + 1);
	};
}
//  The binding contexts referenced in the html determine how observables should be referenced 
//  In the code.  Furthermore, the meaning of 'this' changes as you nest functions, and the need to 
//  Reference parents changes as you nest binding contexts.  
//  Redefining 'this' as 'self' can also help prevent ambiguity with the keyword 'this'


	


ko.applyBindings(new ViewModel());
