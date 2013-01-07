describe("isMultipleOf determines whether a given number is a multiple of a second given number", function(){
	it("returns true for 3 is multiple of 3", function(){
		var result = isMultipleOf(3, 3);
		expect(result).toBe(true);
  	});
  	
  	it("returns false for 5 is multiple of 3", function(){
  	    var result = isMultipleOf(5, 3);
  	    expect(result).toBe(false);
  	});
  	
  	it("returns true for 5 is multiple of 5", function(){
  	    var result = isMultipleOf(5, 5);
  	    expect(result).toBe(true);
  	});
  	
    it("returns true for 30 is multiple of 15", function(){
        var result = isMultipleOf(30, 15);
  	    expect(result).toBe(true);
  	});
  	
  	it("returns false for 1 is multiple of 3", function(){
        var result = isMultipleOf(1, 3);
  	    expect(result).toBe(false);
  	});
});

describe("transmogrifier translates a given number to its 'Fizz Buzz' equivalent", function(){
    it("returns 1 for 1", function(){
        var result = transmogrifier(1);
        expect(result).toBe(1);
    }) ;
    
    it("returns 2 for 2", function(){
       var result = transmogrifier(2);
       expect(result).toBe(2); 
    });
    
    it("returns 'Buzz' for 3", function(){
       var result = transmogrifier(3);
       expect(result).toBe("Buzz"); 
    });

    it("returns 'Buzz' for 9", function(){
       var result = transmogrifier(9);
       expect(result).toBe("Buzz"); 
    });
    
    it("returns 'Fizz' for 5", function(){
       var result = transmogrifier(5);
       expect(result).toBe("Fizz"); 
    });
    
    it("returns 'FizzBuzz' for 15", function(){
       var result = transmogrifier(15);
       expect(result).toBe("FizzBuzz"); 
    });
    
    it("returns 'FizzBuzz' for 45", function(){
       var result = transmogrifier(45);
       expect(result).toBe("FizzBuzz"); 
    });
});

describe("printFizzBuzzList prints a 'FizzBuzz' list starting at 1, up to number given, single entry per line", function(){
	it("returns list of FizzBuzz for 1 to 5", function(){
		var result = printFizzBuzzList(5);
		expect(result).toBe("1\n2\nBuzz\n4\nFizz\n");
  	});
	
	it("returns list of FizzBuzz for 1 to 15", function(){
		var result = printFizzBuzzList(15);
		expect(result).toBe("1\n2\nBuzz\n4\nFizz\nBuzz\n7\n8\nBuzz\nFizz\n11\nBuzz\n13\n14\nFizzBuzz\n");
  	});
});
