const solution = (number) => {
	//Comments
	// The position of the integer is important: 
	// 		It defines the output, eg. 1 in 1000 is M, 1 in 10 is X.

	//Plan of action
	// 1. Convert number to array
	// 1.1 Reverse array ??
	// 2. Save length of number
	// The following point applies to an unreversed array
	// 3. For 4 digits (x000):	
	//		If number.length = 4 && number[0] == 1, return M
	//		If number.length = 4 && number[0] == 2, return MM
	//		If number.length = 4 && number[0] == 3, return MMM
	//	For 3 digits (x00) :
	//		If number.length = 3 && number[0] == 1, return C
	//		If number.length = 3 && number[0] == 2, return CC
	//		If number.length = 3 && number[0] == 3, return CCC
	//		If number.length = 3 && number[0] == 4, return CD
	//		If number.length = 3 && number[0] == 5, return D
	//		If number.length = 3 && number[0] == 6, return DC
	//		If number.length = 3 && number[0] == 7, return DCC
	//		If number.length = 3 && number[0] == 8, return DCCC
	//		If number.length = 3 && number[0] == 9, return CM
	//	For 2 digits (x0) :
	//		If number.length = 2 && number[0] == 1, return X
	//		If number.length = 2 && number[0] == 2, return XX
	//		If number.length = 2 && number[0] == 3, return XXX
	//		If number.length = 2 && number[0] == 4, return XL
	//		If number.length = 2 && number[0] == 5, return L
	//		If number.length = 2 && number[0] == 6, return LX
	//		If number.length = 2 && number[0] == 7, return LXX
	//		If number.length = 2 && number[0] == 8, return LXXX
	//		If number.length = 2 && number[0] == 9, return XC
	//	For 1 digit (x) :
	//		If number.length = 1 && number[0] == 1, return I
	//		If number.length = 1 && number[0] == 2, return II
	//		If number.length = 1 && number[0] == 3, return III
	//		If number.length = 1 && number[0] == 4, return IV
	//		If number.length = 1 && number[0] == 5, return V
	//		If number.length = 1 && number[0] == 6, return VI
	//		If number.length = 1 && number[0] == 7, return VII
	//		If number.length = 1 && number[0] == 8, return VIII
	//		If number.length = 1 && number[0] == 9, return IX



	// Refactoring
}