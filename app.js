const privacyNotice = document.querySelector(".privacy");
const dob = document.querySelector("#dob");
const luckyNumber = document.querySelector("#lucky-no");
const checkButton = document.querySelector("#check-btn");
const messageDiv = document.querySelector("#message");
const luckyGif = document.querySelector("#lucky-gif");
const unluckyGif = document.querySelector("#unlucky-gif");

luckyGif.style.display = "none";
unluckyGif.style.display = "none";

function checkBirthDateIsLucky() {
    const birthDate = dob.value;
    const sum = calculateSum(birthDate);
    compare(sum, luckyNumber.value);
}

function compare (sum, luckyNumber) {
    if(sum % luckyNumber === 0) {
        messageDiv.style.color = "greenyellow";
        messageDiv.innerText = "Your birth date is Lucky 🥳";
        luckyGif.style.display = "inline-block";
        unluckyGif.style.display = "none";
    } else {
        messageDiv.style.color = "red";
        messageDiv.innerText = "Your birth date is not so lucky 😑";
        unluckyGif.style.display = "inline-block";
        luckyGif.style.display = "none";
    }
}

function calculateSum(birthDate) {
    birthDate = birthDate.replaceAll("-", "");
    let sum = 0;
    for(let i=0; i < birthDate.length; i++) {
        sum = sum + Number(birthDate[i]);
    }
    return sum;
}

checkButton.addEventListener("click", checkBirthDateIsLucky);