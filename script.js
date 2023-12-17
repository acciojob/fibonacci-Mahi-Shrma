function fibonacci(num) {
// your code here
	
	if(num==1){
		return 0;
	}
	if(num==2){
		return 1;
	}
	let c;
	let a=0;
	let b=1;
	for (let index = 3; index <=num; index++) {
		c=a+b;
		a=b;
		b=c;
	}
	return c;
}
// function fibonacci(n) {
//   // initialize the first two terms
//   let a = 0;
//   let b = 1;
//   // check if n is 0 or 1 and return the corresponding term
//   if (n === 0) {
//     return a;
//   }
//   if (n === 1) {
//     return b;
//   }
//   // use a for loop to iterate from the third term to the nth term
//   for (let i = 2; i <= n; i++) {
//     // calculate the next term as the sum of the previous two terms
//     let c = a + b;
//     // update the previous two terms
//     a = b;
//     b = c;
//   }
//   // return the nth term
//   return b;
// }
module.exports = fibonacci;
