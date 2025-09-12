let year = 2021;

if (year %400 ==0) {
        console.log("Leap Year Found");
}else if (year % 4 == 0 && year % 100 != 0){
        console.log("Leap Year Found");
}
else{
    console.log("Not a leap year");
}