function fibonacci(num) {
// your code here
	let a=0;
	let b=1;
	if(num==0)
		return a
	if(num==1)
		return b
	let c;
	for (let index = 2; index <=num; index++) {
		c=a+b;
		a=b;
		b=c;
	}
	return c;
}

module.exports = fibonacci;
