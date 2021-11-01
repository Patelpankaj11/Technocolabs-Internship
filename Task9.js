let raceNumber = Math.floor(Math.random() * 1000);
let earlyRegistration = true;
let runnerAge = 22;


if (earlyRegistration === false) {
    raceNumber += 1000;
}


if (runnerAge > 18 && earlyRegistration === true && raceNumber < 1000) {
    console.log(`Your race starts at 9:30 am and your race number is: ${raceNumber}`);
} else if (earlyRegistration === true || runnerAge > 18) {
    console.log(`Your race starts at 11:00 am and your race number is: ${raceNumber}`);
} else if (runnerAge < 18 && earlyRegistration === false) {
    console.log(`Your race starts at 12:30 pm and your race number is: ${raceNumber}`);
} else {
    console.log('Please see the registration desk to get your number');
}