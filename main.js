let i = 0;
function fire(){
    if( i == 0 ){
        let width = 50;
        let progress = document.querySelector(".progress");
        let interval = setInterval(run, 10);
        function run(){
            if(width != 100){
                width++;
                progress.style.width = width + "%";
                progress.innerHTML = width + "%";
            }else{
                clearInterval(interval);
                i=0;
            }
        }
    }
    
}