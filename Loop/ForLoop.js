function run(n){
	var factorial = 1;
		
	for(let i=1; i<=n; i++) {
		factorial *= i;
	}
	
	console.log(factorial);
}
run(5);