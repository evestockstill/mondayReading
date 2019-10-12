
const questions = [
    {
        question:
            'What was the CCS3 effect used to style the background on this page?',
        answer: 'linear-gradient'
    },
    {
        question:
            'Why would you use repeat-x or repeat-y attached to a background image?',
        answer: 'To repeat only horizontally or vertically'
    },
    {
        question:
            'What is the CSS property that will keep a image on the same place on the page?',
        answer: 'Fixed'
    },
    {
        question: 'By default how are images displayed on the page?',
        answer: 'as inline elements'
    },
    {
        question:
            'If the top left corner represent 0% 0% how would you center you center the image on the page with %? ',
        answer: '50% 50%'
    },
    {
        question:
            'What are two reasons to include an alt text to your image in HTML?',
        answer: 'Screen readers and having your images show in image based search results'
    }
];

const flashCardBtn = document.querySelector('#flashCardBtn');
const answer = document.querySelector('#answer');
const question = document.querySelector('#question');

flashCardBtn.addEventListener('click', displayQuestion); 
function displayQuestion() {
    let number = Math.floor(Math.random() * questions.length);
    answer.innerHTML = questions[number].answer;
    question.innerHTML = questions[number].question;

}
