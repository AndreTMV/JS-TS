var args = process.argv;
let inputValues = args.slice(2);
let sum = 0;
inputValues.forEach((element) => {
	console.log(element);
	sum += parseInt(element);
});
console.log('The sum is', sum);
