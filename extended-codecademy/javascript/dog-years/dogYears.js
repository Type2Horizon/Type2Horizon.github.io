function calculateDogYears() {
  // User's Age
  const myAge = document.getElementById('user_defined_age').value;
  // USer's Name
  const myName = document.getElementById('user_defined_name').value;
  // User Age to Dog Years Calculation
  let earlyYears = 2;
  earlyYears *= 10.5;
  laterYears = myAge - 2;
  laterYears *= 4;
  myAgeInDogYears = earlyYears + laterYears;
  // Statement returned to user
  document.getElementById('dog_years_statement').innerHTML = `My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`;
};
document.getElementById('calculate_dog_years').addEventListener('click', calculateDogYears);