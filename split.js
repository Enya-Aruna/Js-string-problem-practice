/* 
split */

const lyrics = 'tumi bondu khala pakhi ami jano ki. bosonto kale tumay bolte pare ne.' ;

const parts = lyrics.split(' ');
const words = lyrics.split('');
const sentence = lyrics.split('.');
//console.log(parts,words , sentence)

// slice

const partial = lyrics.slice(4, 9)
console.log(partial)

//substring

const partial1 = lyrics.substring(4 , 9)