var Flattener = require("./flattenObject.js");

describe("Flattener", function(){
	var flattener = new Flattener(),
		 input = {"key1": "1", "key2": {"a": "2", "b": "3", "c": { "d": "3", "e": " 1"}}},
		 answer = { key1: '1','key2.a': '2','key2.b': '3','key2.c.d': '3',  'key2.c.e': ' 1' };

    it('flattens Objects', function(){
		expect(flattener.flatten(input)).toEqual(answer);
	});

});

