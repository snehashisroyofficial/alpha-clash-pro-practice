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

    //প্রাথমে কেয়বরদের সব  ওয়ার্ড কে আমরা একটি স্ট্রিং আকারে লিখলাম
    const alphabetString = 'abcdefghijklmnopqrtuvwxyz';

    // এরপরে প্রত্যেকটি ওয়ার্ড কে ভেঙ্গে array তে করলাম 
    const alphabet = alphabetString.split('');


    // ০ থেকে ২৫ এর মধ্যে নাম্বার বানাতে হবে 
    const randomNumbers = Math.random() * 25;
    const index = Math.round(randomNumbers);


    // আমাদেরকে random ওয়ার্ড বার করতে হবে 
    const finalword = alphabet[index];
    return finalword;
}


// keyboard key color added 

function keyboardbackgroundColor(elementId) {
    const keyboardHighlight = document.getElementById(elementId);
    keyboardHighlight.classList.add('bg-orange-400');
}


// keyboard key color removed

function removeKeyboardbackgroundColor(elementId) {

    //keyboard এর key যেটা চাপ দিচ্ছি সেটাকে টার্গেট করতে হবে 
    const removeHighlight = document.getElementById(elementId);

    //ভতরে থেকে কালারটিকে ডিলিট করতে হবে 
    removeHighlight.classList.remove('bg-orange-400');
}