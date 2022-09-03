// For a given number N check if it is prime or not. A prime number is a number which is only divisible by 1 and itself.


function prime(n){
    // this is for below 2 values
    if(n <= 1){
        console.log("Its not a prime");
    }

    //For other values

    for(let i = 2;i < n;i++)
        if(n % i == 0)
            return "Its not a prime"
    return "Its a prime number"
}


console.log(prime(2));

