
const greenButton = document.getElementById('greenButton');
const redButton = document.getElementById('redButton');

greenButton.addEventListener('click', () => {
    document.body.style.backgroundColor = 'red';
});

redButton.addEventListener('click', () => {
    document.body.style.backgroundColor = 'green';
});