const finishBtn = document.querySelector('#finish')
const innerDivs = document.querySelectorAll('.inner')

// eventlistener for button click
finishBtn.addEventListener('click', () => {
    let output = 50;
    let interval = setInterval(run, 10);

    function run() {
        for (i = 0; i <= innerDivs.length; i++) {
            innerDivs[i].textContent = `${output}%`;
            innerDivs[i].style.width = `${output}%`;
            if (output != 100) {
                output++;
            }else{
                clearInterval(interval);
            }
        }
    }
});
