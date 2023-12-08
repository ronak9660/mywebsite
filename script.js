const myPointer = document.getElementById("my-pointer");

document.addEventListener("mousemove",dog);

function dog(e) {
    let x = e.pageX ;
    let y = e.pageY ;
    // console.log(x ,",",y);
    myPointer.style.left = x-30 +"px" ;
    myPointer.style.top = y-30 +"px"
}