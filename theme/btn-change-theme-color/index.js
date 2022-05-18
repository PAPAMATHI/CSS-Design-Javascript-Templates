let input = document.getElementsByClassName("btn__ios--container");
let btnSwitch = document.getElementsByClassName("btn__ios--switch");
let body = document.getElementsByClassName("body");

if (input && btnSwitch && body) {
    for (let i = 0; i < input.length; i++) {
        input[i].addEventListener('click', () => {
            if (input[i].classList.contains('active')) {
                input[i].classList.remove('active');
                btnSwitch[i].classList.remove('active--switch');
                body[i].classList.remove('dark');
                // Add your code here 
                return;
            } else {
                input[i].classList.add('active');
                btnSwitch[i].classList.add('active--switch');
                body[i].classList.add('dark');
                // Add your code here 
            }
        })
    }
}