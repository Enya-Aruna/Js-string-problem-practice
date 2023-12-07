const num1  = 80 ;
const num2  = 78 ;
const num3  = 99 ;

if(num2>num1 && num3>num1){
    console.log('num1 is smallest number')
}
else if(num3>num2 && num1> num2){
    console.log('num2 is smallest number')
}
else{
    console.log('num3 is smallest number')
}

console.log(Math.min(num1,num2,num3))