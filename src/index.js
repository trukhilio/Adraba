//find elements that would be sticky
var containers = document.getElementsByClassName("container");

function sticky(){
    var i,
        stickyElement,
        nextElement,
        position,
        heightElem,
        nextPosition,
        positionNextElem;
    for( i = 0; i < containers.length; i++){
        stickyElement = containers[i];
        nextElement = containers[i+1];
        position = stickyElement.offsetTop; //take offset position of the element

        //here we find height of the element
        Array.prototype.map.call(stickyElement.children, function(item){
            if(item.className==="headline"){
                heightElem = item.clientHeight;
            }
            return heightElem
        });

        //For last element next element of this pseudo array is undefined but we can find position the next element in the DOM tree
        nextPosition = stickyElement.nextElementSibling.offsetTop;

        //set next element position
        nextElement !== undefined ? positionNextElem = nextElement.offsetTop : positionNextElem = nextPosition-heightElem;

        //adding or removing classes depending of the element's position
        if (window.pageYOffset >= position) {
            stickyElement.classList.add("sticky");
        } else {
                stickyElement.classList.remove("sticky");
        }
        if (window.pageYOffset >= positionNextElem){
            stickyElement.classList.add("stickyBottom");
        } else {
            stickyElement.classList.remove("stickyBottom");
        }
    }
}

window.onscroll = function() {
    sticky();
};