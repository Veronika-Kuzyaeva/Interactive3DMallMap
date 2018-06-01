;(function(window) {

    'use strict';
    
   
    let divLevels = document.querySelector(".levels");

    let svgPin = Snap();
    Snap.load("img/pin.svg", (f) => {
        svgPin.append(f.select("symbol"));
    });

    floors.sort((a, b) => {
        return a.level - b.level;
    });

    let levels = [];

    for (let f of floors) {
        let svgFloor = Snap();
        console.log(f);

        Snap.load(f.link, (g) => {
            svgFloor.append(g.select("g"));
        });

        svgFloor.attr({viewBox:'0 0 1200 800'});

        levels.push(svgFloor);
    }

    console.log(levels);

    for(let i = 0; i < floors.length; i++) {
        let divLevel = document.createElement('div');
        let divPinsArea = document.createElement('div');
            divPinsArea.setAttribute("class", "level__pins");
    
        divLevel.setAttribute("class", "level level--" + (i+1));
        levels[i].appendTo(divLevel);
        console.log(divLevel);

        divLevel.appendChild(divPinsArea);
        
        divLevels.appendChild(divLevel);
    }

    

})(window);