
const questions = [
    {
        question:
            "Life is too short and sweet to be spent by cribbing and complaining about things. Here are some random quotes about the most wonderful gift that we've got",
        answer: ' Life'
    },
    {
        question:
            'Humor is richly rewarding to the person who employs it. It has some value in gaining and holding attention. But it has no persuasive value at all',
        answer: 'John Kenneth Galbraith'
    },
    {
        question:
            'God save me from my friends. I can protect myself from my enemies.',
        answer: 'Claude Louis Hector de Villars '
    },
    {
        question: 'The price of anything is the amount of life you exchange for it.',
        answer: 'David Thoreau'
    },
    {
        question:
            'Life is like a landscape. You live in the midst of it but can describe it only from the vantage point of distance. ',
        answer: 'Charles Lindbergh'
    },
    {
        question:
            'A critic is someone who never actually goes to the battle, yet who afterwards comes out shooting the wounded.',
        answer: ' Tyne Daly'
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
