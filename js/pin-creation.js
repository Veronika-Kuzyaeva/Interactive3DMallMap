function reGroupPin(level) {
    var map = document.getElementsByClassName("map map--" + level);
    map[0].onclick = (event) => {
        var rect =  map[0].getBoundingClientRect();
        var x=event.clientX - rect.x;
        var y=event.clientY - rect.y;
        console.info(pxToVmin(x,y));
        console.info("X coords: " + x + "px, Y coords: " + y + "px");
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