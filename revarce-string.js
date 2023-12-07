/* 
caracter revarce string:
*/

function revarceString(text){
    let revarsed = '' ;
    for(let i = text.length-1; i >= 0; i--){
        const element = text[i];
        revarsed = revarsed+element ;
        console.log(element , revarsed)
    }
}
const myCampus = 'Bangladesh Sweden polytechnic Institute' ;
const revarsed = revarceString(myCampus);
console.log(revarsed)
