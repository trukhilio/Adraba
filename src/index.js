//find elements that would be sticky
var containers = document.getElementsByClassName("container"),
    timer,
    i,
    stickyElement,
    nextElement,
    position,
    heightElem,
    nextPosition,
    contain,
    positionNextElem;

function sticky(){

    for( i = 0; i < containers.length; i++){
        stickyElement = containers[i];
        nextElement = containers[i+1];
        position = stickyElement.offsetTop; //take offset position of the element

        //here we find height of the element
        heightElem = stickyElement.children[0].clientHeight;

        //For last element next element of this pseudo array is undefined but we can find position the next element in the DOM tree
        nextPosition = stickyElement.nextElementSibling.offsetTop;

        //set next element position
        nextElement !== undefined ? positionNextElem = nextElement.offsetTop : positionNextElem = nextPosition-heightElem;

        contain = stickyElement.classList.contains("sticky");
        //adding or removing classes depending of the element's position
        if (window.pageYOffset >= position) {
            if (!contain){
                stickyElement.classList.add("sticky");
            }
        } else {
            if (contain){
                stickyElement.classList.remove("sticky");
            }
        }
        if (window.pageYOffset >= positionNextElem){
            if (!contain){
                stickyElement.classList.add("stickyBottom");
            }
        } else {
            if (contain){
                stickyElement.classList.remove("stickyBottom");
            }
        }
    }
}

timer = false;

window.addEventListener('scroll', function() {
    if(timer) {
        return
    }
    sticky();
    setTimeout(function(){
        timer = false;
    },50);
}, false);