
function playGame() {

    //প্রথমে home area কে লুকাতে হবে 

    hideHome('home-area');

    //play ground কে দেখাতে হবে 
    showPlayground('play-ground');

    //এরপরে গেম শুরু করতে হবে 
    continueGame();
}



function continueGame() {

    //যেকোন random word বানাতে হবে 
    const randomWord = getRandomAlphabet();

    //random word টিকে স্ক্রীন এ দেখাতে হবে 
    const centerScreen = document.getElementById('center-alphabets')
    centerScreen.innerText = randomWord;

    // যে random word টি দেখাবে সেই word টির কীবোর্ড  এর মধ্যে কালার সেট করতে হবে  
    keyboardbackgroundColor(randomWord);


}



document.addEventListener('keyup', keyPressEvent);

function keyPressEvent(event) {

    //কি key press করছি তা জানার জন্য এটি করতে হবে 
    const keyPress = event.key;


    //   বর্তমানে কোথায় random word লেখাটি দেখাচ্ছে 
    const currentDisplayScore = document.getElementById('center-alphabets');
    const currentDisplay = currentDisplayScore.innerText;
    const currentScore = currentDisplay.toLowerCase();


    // এখানে আমরা if else ফরমুলা সেট করলাম

    if (keyPress === currentScore) {

        // যদি আমরা সঠিক টাইপ করি তাহলে স্কর ১ করে বারবে

        //টার্গেট করতে হবে score area কে 
        const scoreArea = document.getElementById('score-area');
        const scoreAreaInner = scoreArea.innerText;
        const upadetedScore = parseInt(scoreAreaInner);

        // score বাড়াতে হবে ১ যোগ করে 
        const newScore = upadetedScore + 1;

        //নতুন score টি পুরানোর জায়গায় সেট করলাম 
        scoreArea.innerText = newScore;


        //কীবোর্ড এর কি এর কালার ডিলিট করতে হবে 
        removeKeyboardbackgroundColor(currentScore);



        //আবার পুনরায় গেমটি শুরু করলাম
        continueGame();

    }
    else {

        //নাহলে লাইফ ১ করে কমবে
        const lifeScoreElement = document.getElementById('life-area');
        const lifeScoreInner = lifeScoreElement.innerText;
        const lifeScore = parseInt(lifeScoreInner);


        //১ করে পয়েন্ট কাটবে 
        const newLifeScore = lifeScore - 1;


        // পয়েন্ট আপডেট করবে আগের পয়েন্ট এর পরিবর্তে 
        lifeScoreElement.innerText = newLifeScore;

    }
















}

