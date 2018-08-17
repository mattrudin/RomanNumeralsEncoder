const solution = (number) => {
	//Plan of action
	// 1. Convert number to array  with array.prototype.split('');
	// 1.1 Reverse array with array.prototype.reverse();
	const numberArray = number.split('').reverse();
	const romanArray = numberArray.map((number, index) => {
		if number
	})
	
	// For 1 digit (x) :
	// if number[0] == 1, return I
	// if number[0] == 2, return II
	// if number[0] == 3, return III
	// if number[0] == 4, return IV
	// if number[0] == 5, return V
	// if number[0] == 6, return VI
	// if number[0] == 7, return VII
	// if number[0] == 8, return VIII
	// if number[0] == 9, return IX

	// For 2 digits (x0) :
	// if number[1] == 1, return X
	// if number[1] == 2, return XX
	// if number[1] == 3, return XXX
	// if number[1] == 4, return XL
	// if number[1] == 5, return L
	// if number[1] == 6, return LX
	// if number[1] == 7, return LXX
	// if number[1] == 8, return LXXX
	// if number[1] == 9, return XC

	// For 3 digits (x00) :
	// if number[0] == 1, return C
	// if number[0] == 2, return CC
	// if number[0] == 3, return CCC
	// if number[0] == 4, return CD
	// if number[0] == 5, return D
	// if number[0] == 6, return DC
	// if number[0] == 7, return DCC
	// if number[0] == 8, return DCCC
	// if number[0] == 9, return CM

	// For 4 digits (x000):	
	// if number[0] == 1, return M
	// if number[0] == 2, return MM
	// if number[0] == 3, return MMM

	// 4. Reverse array with array.prototype.reverse
	// 5. Join array with array.prototype.join('');
	return numberArray.reverse().join('');

}