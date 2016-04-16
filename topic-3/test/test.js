describe('test', function(){
	beforeEach(module('controller'));

		var movies;

	beforeEach(inject(function(_movies_details_){
		movies = _movies_details_;
	}));
	it('empty movies length 0', function(){
		expect(movies.all().length).toBe(0);
	});

	it('One movies return length 1', function(){
		movies.add({name: 'movies.details name'});

		expect(movies.all().length).toBe(1);
	});
});