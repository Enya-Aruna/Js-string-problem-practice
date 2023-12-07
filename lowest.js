/* 
homework::
        lowest number in array
*/


function minInArray(numbers){
    let smellst = numbers[0];

    for(let i = 0 ; i<numbers.length ; i++){
        const element = numbers[i];
        if(element<smellst){
            smellst = element;
        }
    }
    return smellst ;
}

const heights = [ 167 , 190 , 120 , 176 , 165, 137];
const lowest = minInArray(heights);
console.log('loewst number is' , lowest)