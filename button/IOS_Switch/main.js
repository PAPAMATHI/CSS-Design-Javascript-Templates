let input = document.getElementsByClassName("btn__ios--container");
let btnSwitch = document.getElementsByClassName("btn__ios--switch");

if (input && btnSwitch) {
    for (let i = 0; i < input.length; i++) {
        input[i].addEventListener('click', () => {
            if (input[i].classList.contains('active')) {
                input[i].classList.remove('active');
                btnSwitch[i].classList.remove('active--switch');
                // Add your code here 
                return;
            } else {
                input[i].classList.add('active');
                btnSwitch[i].classList.add('active--switch');
                // Add your code here 
            }
        })
    }
}