function reGroupPin(level) {
    
    var map = document.getElementsByClassName("level level--1");
    
    map[0].onclick = (event) => {
        console.info(map[0]);
        var rect =  map[0].getBoundingClientRect();
        
        var x=event.clientX - rect.x;
        var y=event.clientY - rect.y;
        var z = 0;

        //rotateX(70deg)
        //around X
        //(x, y, 0)
        var newX = x;
        var newY = y* Math.cos(-70);
        var newZ = y * Math.sin(-70);

        //rotateX(-45deg)
        //around X
        //(newX, newY, newZ)
        var newX2 = newX * Math.cos(45) - newY * Math.sin(45);
        var newY2 = newX * Math.sin(45) + newY * Math.cos(45);
        var newZ2 = newZ;

        console.info("X coords: " + x + "px, Y coords: " + y + "px");
        console.info(pxToVmin(newX2,newY2));
        
    }

    function pxToVmin (x, y) {
        var heightBrows = document.documentElement.clientHeight;
        var widthBrows = document.documentElement.clientWidth;

        heightBrows >= widthBrows ? vmin = Math.floor(widthBrows / 100) :
                                    vmin = Math.floor(heightBrows / 100);

        vh = Math.floor(y/vmin);
        vw = Math.floor(x/vmin);
        createPin(vh, vw);
        return (vh + " " + vw);
    }

    function createPin(vh, vw, count = 1, floorLevel = 1) {
        var pin = document.body.getElementsByClassName('pin pin--' + floorLevel + "-" + count)[0];
        pin.style['top'] = vh + 'vmin';
        pin.style['left'] = vw + 'vmin';
        /**
         * <a class="pin pin--1-1" data-category="1" data-space="1.01" href="#" aria-label="Pin for Apple Heart">
                                        <span class="pin__icon">
                                            <svg class="icon icon--pin"><use xlink:href="#icon-pin"></use></svg>
                                            <svg class="icon icon--logo icon--appleheart"><use xlink:href="#icon-appleheart"></use></svg>
                                        </span>
                                    </a>
        */
    }
};