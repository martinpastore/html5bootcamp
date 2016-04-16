describe('test', function(){
	beforeEach(module('controller'));

		var index;

	beforeEach(inject(function($index){
		index = $index;
	}));
	if(index < 0){
		return;
	};
});