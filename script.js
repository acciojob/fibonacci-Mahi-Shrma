function fibonacci(num) {
// your code here
	let a=0;
	let b=1;
	if(num==1)
		return 0
	if(num==2)
		return 1
	let c;
	for (let index = 2; index <=num; index++) {
		c=a+b;
		a=b;
		b=c;
	}
	return c;
}

module.exports = fibonacci;
