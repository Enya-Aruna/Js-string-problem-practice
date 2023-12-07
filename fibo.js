/* 
fibonacci seriz:
*/

const fibo = [0 , 1]
for(let i = 2; i<=12; i++){
    fibo[i] = fibo[i-1]+ fibo[i-2];
 
}
//console.log(fibo)

function add(a, b){
    return a + b;
   }
   console.log(add("adam" + "eve"))