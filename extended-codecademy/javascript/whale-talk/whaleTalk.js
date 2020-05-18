function translateToWhale() {
    let userInput = document.getElementById('user_defined_text').value;
    let userInputLowerCase = userInput.toLowerCase();
    const whaleVowels = ['a', 'e', 'i', 'o', 'u'];
    let resultArray = [];
    for (let i = 0 ; i < userInputLowerCase.length ; i++) {
        for (let j = 0 ; j < whaleVowels.length ; j++){
            if (userInputLowerCase[i] === whaleVowels[j]) {
                if (userInputLowerCase[i] === 'e') {
                    resultArray.push('ee');
                    } else if (userInputLowerCase[i] === 'u') {
                    resultArray.push('uu');
                    } else {
                    resultArray.push(userInputLowerCase[i]);
                }
            }
        }
    };
    document.getElementById('whale_translation_text').innerHTML = resultArray.join('').toUpperCase();
};
document.getElementById('translate_to_whale').addEventListener('click', translateToWhale);