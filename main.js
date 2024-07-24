'use strict'; 

const firstQuestionDiv = document.querySelector('.firstQuestion');
const inputsOptsOne = document.getElementById('optsFirstQuestion').getElementsByTagName('input');
const submitBtnOne = document.querySelector('.submitBtnOne');

const secondQuestionDiv = document.querySelector('.secondQuestion');
const inputsOptsTwo = document.getElementById('optsSecondQuestion').getElementsByTagName('input');
const submitBtnTwo = document.querySelector('.submitBtnTwo');

const thirdQuestionDiv = document.querySelector('.thirdQuestion');
const inputsOptsThree = document.getElementById('optsThirdQuestion').getElementsByTagName('input');
const submitBtnThree = document.querySelector('.submitBtnThree');

const fourthQuestionDiv = document.querySelector('.fourthQuestion');
const inputsOptsFour = document.getElementById('optsFourthQuestion').getElementsByTagName('input');
const submitBtnFour = document.querySelector('.submitBtnFour');

let scorePts = 0;
const score = document.querySelector('.score');
const message = document.querySelector('.message');

const getInputValueOne = function() {
    for (let option of inputsOptsOne) {
        let optionValue = option.value;

        if(option.checked) {
            const checkedOpt = optionValue;
            console.log(checkedOpt);
            if(checkedOpt == 'a') {
                scorePts = 1;
                score.textContent = `${scorePts} / 4`;
                firstQuestionDiv.classList.remove('bg-champagne');
                firstQuestionDiv.classList.add('bg-vanilla');
                setTimeout(function () {
                    firstQuestionDiv.style.display = 'none';
                    secondQuestionDiv.style.display = 'block';
                }, 1500);
            } else {
                firstQuestionDiv.classList.remove('bg-champagne');
                firstQuestionDiv.classList.add('bg-chestnut');
                submitBtnOne.textContent = 'try again';
                setTimeout(function () {
                    submitBtnOne.textContent = 'submit answer';
                }, 1500);
            }
        }
    }
} 
submitBtnOne.addEventListener('click', getInputValueOne);

const getInputValueTwo = function() {
    for (let option of inputsOptsTwo) {
        let optionValue = option.value;

        if(option.checked) {
            const checkedOpt = optionValue;
            console.log(checkedOpt);
            if(checkedOpt == 'c') {
                scorePts = 2;
                score.textContent = `${scorePts} / 4`;
                secondQuestionDiv.classList.remove('bg-champagne');
                secondQuestionDiv.classList.add('bg-vanilla');
                setTimeout(function () {
                    secondQuestionDiv.style.display = 'none';
                    thirdQuestionDiv.style.display = 'block';
                }, 1500);
            } else {
                secondQuestionDiv.classList.remove('bg-champagne');
                secondQuestionDiv.classList.add('bg-chestnut');
                submitBtnTwo.textContent = 'try again';
                setTimeout(function () {
                    submitBtnTwo.textContent = 'submit answer';
                }, 1500);
            }
        }
    }
} 
submitBtnTwo.addEventListener('click', getInputValueTwo);

const getInputValueThree = function() {
    for (let option of inputsOptsThree) {
        let optionValue = option.value;

        if(option.checked) {
            const checkedOpt = optionValue;
            console.log(checkedOpt);
            if(checkedOpt == 'b') {
                scorePts = 3;
                score.textContent = `${scorePts} / 4`;
                thirdQuestionDiv.classList.remove('bg-champagne');
                thirdQuestionDiv.classList.add('bg-vanilla');
                setTimeout(function () {
                    thirdQuestionDiv.style.display = 'none';
                    fourthQuestionDiv.style.display = 'block';
                }, 1500);
            } else {
                thirdQuestionDiv.classList.remove('bg-champagne');
                thirdQuestionDiv.classList.add('bg-chestnut');
                submitBtnThree.textContent = 'try again';
                setTimeout(function () {
                    submitBtnThree.textContent = 'submit answer';
                }, 1500);
            }
        }
    }
} 
submitBtnThree.addEventListener('click', getInputValueThree);

const getInputValueFour = function() {
    for (let option of inputsOptsFour) {
        let optionValue = option.value;

        if(option.checked) {
            const checkedOpt = optionValue;
            console.log(checkedOpt);
            if(checkedOpt == 'c') {
                scorePts = 4;
                score.textContent = `${scorePts} / 4`;
                fourthQuestionDiv.classList.remove('bg-champagne');
                fourthQuestionDiv.classList.add('bg-vanilla');
                setTimeout(function () {
                    fourthQuestionDiv.style.display = 'none';
                    message.style.display = 'block';
                }, 1500);
            } else {
                fourthQuestionDiv.classList.remove('bg-champagne');
                fourthQuestionDiv.classList.add('bg-chestnut');
                submitBtnFour.textContent = 'try again';
                setTimeout(function () {
                    submitBtnFour.textContent = 'submit answer';
                }, 1500);
            }
        }
    }
} 
submitBtnFour.addEventListener('click', getInputValueFour);