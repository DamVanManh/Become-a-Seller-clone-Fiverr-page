var index = 0;
var opened = false;
// mảng các phần tử bị click
var headerSelected = document.querySelectorAll('.lp section');

function remove(index){
        document.querySelectorAll('ul .lp')[index].classList.remove("opened");
}
function doIt(x){
    if (index != x) {
        remove(index);
        document.querySelectorAll('ul .lp')[x].classList.add("opened");
        opened = true;
        index = x;
    } else {
        if (opened == true) {
            document.querySelectorAll('ul .lp')[x].classList.remove("opened");
            opened = false;
        } else {
            document.querySelectorAll('ul .lp')[x].classList.add("opened");
            opened = true;
        }
    }
}
headerSelected[0].addEventListener("click",function(){
    doIt(0);
});
headerSelected[1].addEventListener("click",function(){
    doIt(1);
});
headerSelected[2].addEventListener("click",function(){
    doIt(2);
});
headerSelected[3].addEventListener("click",function(){
    doIt(3);
});
headerSelected[4].addEventListener("click",function(){
    doIt(4);
});
headerSelected[5].addEventListener("click",function(){
    doIt(5);
});

