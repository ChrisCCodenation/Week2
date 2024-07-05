let str = "lhkjhjfdewtreuyioijkjnj";
const vowels = "aeiouAEIOU";
let lastVowelIndex = -1;
 
for (let i = str.length - 1; i >= 0; i--) {
    if (vowels.includes(str[i])) {
        lastVowelIndex = i;
        break;
    }
}
 
console.log(`The index of the last vowel is: ${lastVowelIndex}`);