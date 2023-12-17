function fibonacci(num) {
// your code here
	let a=0;
	let b=1;
	if(num==1)
		return 0
	if(num==2)
		return 1
	for (let index = 2; index <=num; index++) {
		let c=a+b;
		a=b;
		b=c;
	}
	return b;
}

module.exports = fibonacci;
