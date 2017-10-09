var containers = document.getElementsByClassName("container");

function sticky(){
    var i,
        stickyElement,
        nextElement,
        position,
        heightElem,
        positionNextElem;
    for( i = 0; i < containers.length; i++){
        stickyElement = containers[i];
        nextElement = containers[i+1];
        position = stickyElement.offsetTop;
        Array.prototype.map.call(stickyElement.children, function(item){
            if(item.className==="headline"){
                heightElem = item.clientHeight;
            }
            return heightElem
        });

        nextElement !== undefined ? positionNextElem = nextElement.offsetTop : positionNextElem = (stickyElement.nextElementSibling.offsetTop-heightElem);

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