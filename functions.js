function hideHome(homeElementId) {
    const elementId = document.getElementById(homeElementId);  // home screen hide 
    elementId.classList.add('hidden');
}

function showPlayground(elementId) {
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');                       //remove hidden 
}

/**-------------------------------------------------------------------------------------------------------- */







// GENERATE RANDOM ALPHABETS | WORD 
function getRandomAlphabet() {

    //generate random alphabet
    const alphabetString = 'abcdefghijklmnopqrtuvwxyz';
    const alphabet = alphabetString.split('');             // we generate random word 

    //generate random number between 0-25
    const randomNumbers = Math.random() * 25;
    const index = Math.round(randomNumbers);


    //get the final word 
    const finalword = alphabet[index];
    return finalword;
}

function keyboardbackgroundColor(elementId) {
    const keyboardHighlight = document.getElementById(elementId);
    keyboardHighlight.classList.add('bg-orange-400');
}






function removeKeyboardbackgroundColor(elementId) {

    //keyboard এর key যেটা চাপ দিচ্ছি সেটাকে টার্গেট করতে হবে 
    const removeHighlight = document.getElementById(elementId);

    //ভতরে থেকে কালারটিকে ডিলিট করতে হবে 
    removeHighlight.classList.remove('bg-orange-400');
}