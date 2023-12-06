/*   
includes mane holo eta check kore kono akta string er kono akta part oi string a ase kina check kre.

*/

const lyrics = 'tumi bondu khala pakhi ami jano ki. bosonto kale tumay bolte pare ne.' ;

//const doseExist  = lyrics.includes('paKhi') ;
//console.log(doseExist);
const searchString = 'paKhi' ;
const searchStringLowerCase = searchString.toLowerCase();
const lyricsLowerCase = lyrics.toLowerCase();
const doseExist = lyricsLowerCase.includes(searchStringLowerCase);
console.log(doseExist);

const doseExistOneline = lyrics.toLocaleLowerCase().includes(searchString.toLocaleLowerCase());
console.log(doseExistOneline);

/* 
IndexOf check kore part ta koto number index a ase
*/

console.log(lyrics.indexOf('jano'))
console.log(lyrics.indexOf('hello'))

if(lyrics.indexOf('sada') !== -1){
    console.log('exixting inside the word')
}
else{
    console.log('cannot find word') ;
}
/*  
startWith
 check kore potom lika deya suro hoice kina
 */

console.log(lyrics.startsWith('tumi')) ;

/* 
endsWith
check kore lika ta lasst a ase kina
*/
console.log(lyrics.endsWith('ne')) ;
console.log(lyrics.endsWith('ne.')) ;