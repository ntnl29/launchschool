let person = 'Victor';

console.log(`Good morning, ${person}.`);
console.log(`Good afternoon, ${person}.`);
console.log(`Good evening, ${person}.`);

// function version of above

function goodMorn(firstName, lastName) {
  console.log(`Good morning, ${firstName} ${lastName}`);
}

function goodAft(firstName, lastName) {
  console.log(`Good afternoon, ${firstName} ${lastName}`);
}

function goodEve(firstName, lastName) {
  console.log(`Good evening, ${firstName} ${lastName}`);
}

goodMorn('Jake', 'Jones');
goodAft('Jake', 'Jones');
goodEve('Jake', 'Jones');