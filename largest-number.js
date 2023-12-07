const num1  = 80 ;
const num2  = 78 ;
const num3  = 99 ;
if(num1>num2 && num1>num3){
    console.log('largest number is num1')
}
else if(num2>num1 && num2>num3){
    console.log('largest numer is num2')
}
else{
    console.log('largest numer is num3')
}


    console.log(Math.max(num1 , num2 , num3))
