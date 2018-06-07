let divLevels = document.querySelector(".levels");
let styleRule = document.styleSheets[1];
        
floors.sort((a, b) => {
    return a.level - b.level;
});

let translateZ = (10 / floors.length) * 5;

for(let i = 0; i < floors.length; i++) {
    let divLevel = document.createElement('div');
        divLevel.setAttribute("class", "level level--" + (i+1));

    let divPinsArea = document.createElement('div');
        divPinsArea.setAttribute("class", "level__pins");
        
    let svgFloor = Snap();

    Snap.load(floors[i].link, (g) => {
        svgFloor.append(g.select("g"));
        svgFloor.append(g.select("style"));
    });

    svgFloor.attr({viewBox:'0 0 1200 800'});

    svgFloor.appendTo(divLevel);
    divLevel.appendChild(divPinsArea);
    
    divLevels.appendChild(divLevel);
    styleRule.insertRule(`.level--${floors[i].level}::after {content: 'L${floors[i].level}'; }`, 0);

    if (!(floors[i].level===1)) {
        let lvl = (floors[i].level - 1) * translateZ;
        styleRule.insertRule(`.level--${floors[i].level} {
            -webkit-transform: translateZ(${lvl}vmin);
            transform: translateZ(${lvl}*vmin);
        }`, 0);

        let j = floors[i].level;
        while (j > 1) {
            j--;
            styleRule.insertRule(`.levels--selected-${floors[i].level} .level--${j} {
                -webkit-transform: translateZ(-60vmin);
                transform: translateZ(-60vmin);
            }`, 0);
        }
    }

    styleRule.insertRule(`.levels--selected-${floors[i].level} .level:not(.level--${floors[i].level})
            { opacity: 0; }`, 0);
}
    
