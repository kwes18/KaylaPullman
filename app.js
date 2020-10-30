window.onload = init();

function init(){
    let links = document.getElementsByClassName('link');
    for (let l of links){
        l.addEventListener('mouseover', function(e){
            e.target.style.color = "magenta";
        });
        l.addEventListener('mouseout', function(e){
            e.target.style.color = "#300c94";
        });
        l.addEventListener('click', function(e){
            e.target.style.color = "green";
        });
    }

}