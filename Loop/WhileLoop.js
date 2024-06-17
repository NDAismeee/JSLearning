function run(n){
	var output = "2";
	var i = 3;
	while(i<=n) {
		if (i%2 == 0){
            output = output + "," + i;
        }
        i++;
	}
	
	console.log(output);
}
run(12)