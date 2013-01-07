printFizzBuzzList = function(stopAt) {
    var list = "";
    
    i = 1;
    while (i <= stopAt) {
        list = list + transmogrifier(i) + "\n";
        i++;
    }
    
    return list;
}

isMultipleOf = function(toTest, divisor) {
	if (toTest % divisor == 0) {
		return true;
	} else {
		return false;
	}
}

transmogrifier = function(num) {
    if (isMultipleOf(num, 15)) {
        return "FizzBuzz";
    }
    else if (isMultipleOf(num, 5)) {
        return "Fizz";
    }
    else if (isMultipleOf(num, 3)) {
        return "Buzz";
    }
    else {
        return num
    }
}

