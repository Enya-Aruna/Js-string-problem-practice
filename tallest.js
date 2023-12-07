function maxInArra(numbers){
    let largestNumber = numbers[0] ;
    for(let i = 0 ; i<numbers.length ; i++){
        const element = numbers[i];
      if(element>largestNumber){
        largestNumber = element ;
      }
       
    }
    return largestNumber ;
}

const heights = [ 167 , 190 , 120 , 176 , 165, 137];
const tallest = maxInArra(heights)
console.log("tallest number is" ,tallest)