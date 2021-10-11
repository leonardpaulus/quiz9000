const correctAnswer = false;

const yesAlert = document.querySelector('.yes');
const noAlert = document.querySelector('.no');

yesAlert.onclick = function () {
if (correctAnswer === true) {
alert("This is correct");
} else {
    alert("This is incorrect");
}
};

noAlert.onclick = function () {
    if (correctAnswer === false) {
    alert("This is correct");
    } else {
        alert("This is incorrect");
    }
    };