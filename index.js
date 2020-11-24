window.onload = init();

function init(){
    let links = document.getElementsByClassName('link');
    for (let l of links){
        l.addEventListener('click', function(e){
            e.target.style.color = "#810292";
        });
    }

}