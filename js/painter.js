function browser_name(){
    var browser_id = navigator.userAgent;    
    // перечень условий
    if (browser_id.search(/Chrome/) != -1) return 'Google Chrome';
    if (browser_id.search(/Firefox/) != -1) return 'Firefox';
    if (browser_id.search(/Opera/) != -1) return 'Opera';
    if (browser_id.search(/Safari/) != -1) return 'Safari';
    if (browser_id.search(/MSIE/) != -1) return 'Internet Explorer';
  
    return -1;
}

let browser = browser_name();

let divContainer = document.querySelector(".container");

let snapIcons = Snap();
Snap.load("img/icons.svg", (g) => {
    snapIcons.append(g.select("g"));
});
snapIcons.addClass("hidden");
snapIcons.appendTo(divContainer);

// Container
let divMain = document.createElement("div");
    divMain.setAttribute("class", "main");

let aside = document.createElement("aside");
    aside.setAttribute("class", "spaces-list");
    aside.setAttribute("id", "spaces-list");

// Main
    // Header
let h1 = document.createElement("h1");
    h1.innerText = "Интерактивная карта";
let header = document.createElement("header");
    header.setAttribute("class", "codrops-header");
    
    header.appendChild(h1);
    
    // Mall
let divMall = document.createElement("div");
    divMall.setAttribute("class", "mall");
let divSurroundings = document.createElement("div");
    divSurroundings.setAttribute("class", "surroundings");
let imgSurroundings = document.createElement("img");
    imgSurroundings.setAttribute("class", "surroundings__map");
    imgSurroundings.setAttribute("src", "img/surroundings.svg");
    imgSurroundings.setAttribute("alt", "Surroundings");
let divLevels = document.createElement("div");
    divLevels.setAttribute("class", "levels");

    divSurroundings.appendChild(imgSurroundings);
    divMall.appendChild(divSurroundings);
    divMall.appendChild(divLevels);
    
    // Button search
let buttonOpenSearch = document.createElement("button");
    buttonOpenSearch.setAttribute("class", "boxbutton boxbutton--dark open-search");
    buttonOpenSearch.setAttribute("aria-label", "Show search");
let snapButton = Snap();
    snapButton.use("icon-search");
    snapButton.addClass("icon icon--search");

    snapButton.appendTo(buttonOpenSearch);


    //Navigation
let navMallNav = document.createElement("nav");
    navMallNav.setAttribute("class", "mallnav mallnav--hidden");

let buttonUp = document.createElement("button");
    buttonUp.setAttribute("class", "boxbutton mallnav__button--up");
    buttonUp.setAttribute("aria-label", "Go up");
let snapButtonUp = Snap();
    snapButtonUp.use("icon-angle-up");
    snapButtonUp.addClass("icon icon--angle-down");

    snapButtonUp.appendTo(buttonUp);

let buttonAll = document.createElement("button");
    buttonAll.setAttribute("class", "boxbutton boxbutton--dark mallnav__button--all-levels");
    buttonAll.setAttribute("aria-label", "Back to all levels");
let snapButtonAll = Snap();
    snapButtonAll.use("icon-stack");
    snapButtonAll.addClass("icon icon--stack");

    snapButtonAll.appendTo(buttonAll);

let buttonDown = document.createElement("button");
    buttonDown.setAttribute("class", "boxbutton mallnav__button--down");
    buttonDown.setAttribute("aria-label", "Go down");
let snapButtonDown = Snap();
    snapButtonDown.use("icon-angle-down");
    snapButtonDown.addClass("icon icon--angle-down");

    snapButtonDown.appendTo(buttonDown);

    navMallNav.appendChild(buttonUp);
    navMallNav.appendChild(buttonAll);
    navMallNav.appendChild(buttonDown);

    // Content
let divContent = document.createElement("div");
    divContent.setAttribute("class", "content");

let buttonContent = document.createElement("button");
    buttonContent.setAttribute("class", "boxbutton boxbutton--dark content__button content__button--hidden");
    buttonContent.setAttribute("aria-label", "Close details");
let snapButtonContent = Snap();
    snapButtonContent.use("icon-cross");
    snapButtonContent.addClass("icon icon--cross");

    snapButtonContent.appendTo(buttonContent);

let buttonMoving = document.createElement("button");
    buttonMoving.setAttribute("class", "boxbutton boxbutton--dark pin__moving pin__moving--hidden");
    buttonMoving.setAttribute("aria-label", "Pin moving");
let snapButtonFloor = Snap();
    snapButtonFloor.use("icon-pin-floor");
    snapButtonFloor.addClass("icon icon--cross");

    snapButtonFloor.appendTo(buttonMoving);

let buttonPin = document.createElement("button");
    buttonPin.setAttribute("class", "boxbutton boxbutton--dark pin__button pin__button--hidden");
    buttonPin.setAttribute("aria-label", "Pin manipulation");
let snapButtonPin = Snap();
    snapButtonPin.use("icon-pin-cross");
    snapButtonPin.addClass("icon icon--cross");

    snapButtonPin.appendTo(buttonPin);

    divContent.appendChild(buttonContent);
    divContent.appendChild(buttonMoving);
    divContent.appendChild(buttonPin);

    divMain.appendChild(header);
    divMain.appendChild(divMall);
    divMain.appendChild(buttonOpenSearch);
    divMain.appendChild(navMallNav);
    divMain.appendChild(divContent);

    // Aside

let divSearch = document.createElement("div");
    divSearch.setAttribute("class", "search");

let inputSearch = document.createElement("input");
    inputSearch.setAttribute("class", "search__input");
    inputSearch.setAttribute("placeholder", "Поиск...");

let buttonSearch = document.createElement("button");
    buttonSearch.setAttribute("class", "boxbutton boxbutton--darker close-search");
    buttonSearch.setAttribute("aria-label", "Close details");
let snapButtonSearch = Snap();
    snapButtonSearch.use("icon-cross");
    snapButtonSearch.addClass("icon icon--cross");

    snapButtonSearch.appendTo(buttonSearch);

    divSearch.appendChild(inputSearch);
    divSearch.appendChild(buttonSearch);

let spanLabel = document.createElement("span");
    spanLabel.setAttribute("class", "label");
let inputSort = document.createElement("input");
    inputSort.setAttribute("id", "sort-by-name");
    inputSort.setAttribute("class", "label__checkbox");
    inputSort.setAttribute("type", "checkbox");
    inputSort.setAttribute("aria-label", "Show alphabetically");
let labelText = document.createElement("label");
    labelText.setAttribute("class", "label__text");
    labelText.innerText = "A - Z";

    spanLabel.appendChild(inputSort);
    spanLabel.appendChild(labelText);

let ulList = document.createElement("ul");
    ulList.setAttribute("class", "list grouped-by-category");

    aside.appendChild(divSearch);
    aside.appendChild(spanLabel);
    aside.appendChild(ulList);

    divContainer.appendChild(divMain);
    divContainer.appendChild(aside);

let styleRule = document.styleSheets[1];

function getPosts(file, callback) {
    let output = "";
    
    var rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType("application/json");
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function() {
        if (rawFile.status == "200" && rawFile.readyState == 4) {
            callback(JSON.parse(rawFile.response));
        }
    }
    rawFile.send(null);
}

let floors = [];
let list = [];

getPosts(document.querySelector(".container").dataset.json, (info) => {
    floors = info.levels;
    drawFloors(floors);
    list = info.list;
    main(list);
});

function drawFloors (floors) {
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
        styleRule.insertRule(`.level--${floors[i].level}::after {content: 'Этаж ${floors[i].level}'; }`, 0);

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
}
