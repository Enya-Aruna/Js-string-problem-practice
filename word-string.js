function revarceWord(str){
const words = str.split(' ') 
const result = [] ;
for(let i = words.length-1 ; i >= 0 ; i--){
   const element= words[i] ;
    result.push(element)
}
const revarced = result.join( ' '); 
console.log(revarced)
 }




const mySchool = 'Rotary Betagi Union High School';
revarceWord(mySchool)
