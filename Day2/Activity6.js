
let time = 2;
let placeOfWork = "Office";
let townOfHome = "Home";
 
if (time >= 0 && time < 6) {
    console.log(`At ${time}:00, I'm trying to sleep.`);
} else if (time >= 6 && time < 8) {
    console.log(`At ${time}:00, I'm at ${townOfHome}.`);
} else if (time >= 8 && time < 9) {
    console.log(`At ${time}:00, I'm commuting.`);
} else if (time >= 9 && time < 17) {
    console.log(`At ${time}:00, I'm at ${placeOfWork}.`);
} else if (time >= 17 && time < 18) {
    console.log(`At ${time}:00, I'm on my way home.`);
} else if (time >= 18 && time < 24) {
    console.log(`At ${time}:00, I'm at ${townOfHome}.`);
} else {
    console.log(`That's not a valid time.`);
}
 