function reGroupPin(level) {
    
    setAjaxQuery();

    var map = document.getElementsByClassName("level level--1");
    
    map[0].onclick = (event) => {
        //console.info(map[0]);
        //var rect =  map[0].getBoundingClientRect();
        //console.log(rect);

        var point = {x:0,y:0};

        point.x = event.offsetX == undefined ? event.layerX : event.offsetX;
        point.y = event.offsetY == undefined ? event.layerY : event.offsetY;

        console.info("X coords: " + point.x + "px, Y coords: " + point.y + "px");
        /*
        rotateY(point, 5);
        rotateZ(point, 5);
        /*
        point.x = event.clientX - rect.x;
        point.y = event.clientY - rect.y;
        

        point.z = -96;

        rotateX1(point, 70);
        rotateZ(point, 25);
        */
        //console.info("X coords: " + point.x + "px, Y coords: " + point.y + "px");
        console.info(point, rect.width/2, rect.height/2);
        //point = goPerspective(point.x, point.y, rect.width/2, rect.height/2);
        createPin(point.x, point.y);
        
    }

    function goPerspective (pointX,pointY, w, h) {
        var point = {x:0, y:0, z:0};
        
        point.x = (pointX * 0.99);
        point.y = (pointY * 0.9);
        /*
        point.x = pointX / (pointX * (1/(3500+w*2-pointX)) + 1);
        point.y = pointY / (pointY * (1/(3500+h*2-pointY)) + 1);
        */

        return point;
    }

    function rotateX1(vector, deg) {
        var rad = deg * Math.PI/180;
        var newX = vector.x;
        var newZ = (vector.z + vector.y * Math.sin(rad)) / Math.cos(rad);
        var newY = vector.y * Math.cos(rad) + newZ;
        vector.x = newX; vector.y = newY; vector.z = newZ;
        return vector;
    }

    function rotateX(vector, deg) {
        var rad = deg * Math.PI/180;
        var newX = vector.x;
        var newY = vector.y * Math.cos(rad) + vector.z * Math.sin(rad);
        var newZ = -vector.y * Math.sin(rad) + vector.z * Math.cos(rad);
        vector.x = newX; vector.y = newY; vector.z = newZ;
        return vector;
    }

    function rotateY(vector, deg) {
        var rad = deg * Math.PI/180;
        var newX = vector.x * Math.cos(rad) + vector.z * Math.sin(rad);
        var newY = vector.y;
        var newZ = -vector.x * Math.sin(rad) + vector.z * Math.cos(rad);
        vector.x = newX; vector.y = newY; vector.z = newZ;
        return vector;
    }

    function rotateZ(vector, deg) {
        var rad = deg * Math.PI/180;
        var newX = vector.x * Math.cos(rad) - vector.y * Math.sin(rad);
        var newY = vector.x * Math.sin(rad) + vector.y * Math.cos(rad);
        var newZ = vector.z;
        vector.x = newX; vector.y = newY; vector.z = newZ;
        return vector;
    }

    function pxToVmin (x, y) {
        var vm = (document.body.clientWidth >= document.body.clientHeight) ? 
        (document.body.clientWidth / 100) :
        (document.body.clientHeight / 100)
        createPin(x, y);
    }
};

function createPin(left, top, count, floorLevel) {
        var pin = document.body.getElementsByClassName('pin pin--' + floorLevel + "-" + count)[0];
        pin.style['top'] = top + 'px';
        pin.style['left'] = left + 'px';
};