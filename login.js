console.log('JavaScript file loaded'); // Check if this message appears in the console

document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.img__btn').addEventListener('click', function() {
        console.log('Button clicked'); // Check if this message appears in the console
        document.querySelector('.cont').classList.toggle('s--signup');
    });
});
