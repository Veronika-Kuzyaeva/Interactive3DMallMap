

function showList(list, category) {
    //initList(list);
    for (let index in list) {
        console.info(index);
        
        //Add item to list
        //addRow(list[index]['floor_id'], category, list[index]['equip_id'], list[index]['equip_name']);

        //Add content to item
        addContent(list[index]['equip_id'], category, list[index]['equip_name'], list[index]['description'])

        if (list[index]['floor_id'] != "-999") {
            let aPin = document.createElement('a');
                aPin.setAttribute('class', 
                                    'pin pin--' + list[index]['floor_id'] + 
                                    '-' + list[index]['equip_id']);
                aPin.setAttribute('data-category', category);
                aPin.setAttribute('data-space', list[index]['equip_id']);
                aPin.setAttribute('href', '#');
                aPin.setAttribute('aria-label', 'Pin for ' + 
                                    list[index]['equip_name']);                                
            
            let divPin = document.createElement('span');
                divPin.setAttribute('class', 'pin__icon');
            
            let svgPin = Snap();
            Snap.load("img/pin.svg", (f) => {
                svgPin.append(f.select("symbol"));
                svgPin.appendTo(divPin);
            });

            aPin.appendChild(divPin);

            let divLevelPins = document.body.getElementsByClassName('level__pins')[list[index]['floor_id']-1];
            console.info(divLevelPins);
            
            divLevelPins.appendChild(aPin);
            createPin(list[index]['Xasis'], list[index]['Yasis'], list[index]['equip_id'], list[index]['floor_id']);
            
        }
    }
    
}

console.log(list);
showList(list.filter((item) => item.building_id == 1), 1);
showList(list.filter((item) => item.building_id == -999), 2);

function addRow(floor_id, category, equip_id, equip_name) {
    var newList = document.querySelector('.container>aside>ul');

    let li = document.createElement('li');
        li.setAttribute("class", "list__item");
        li.setAttribute("data-level", floor_id);
        li.setAttribute('data-category', category);
        li.setAttribute('data-space', equip_id);
    

    let a = document.createElement('a');
        a.setAttribute('href', '#');
        a.setAttribute('class', 'list__link');
        a.innerText = equip_name;

    li.appendChild(a);

    newList.appendChild(li);
}

function addContent(equip_id, category, equip_name, description) {
    let itemMenu = document.getElementsByClassName('content')[0];

    let divContent = document.createElement('div');
        divContent.setAttribute('class', 'content__item');
        divContent.setAttribute('data-space', equip_id);
        divContent.setAttribute('data-category', category);

    let head = document.createElement('h3');
        head.setAttribute('class','content__item-title');
        head.innerText = equip_name;

    let divDetails = document.createElement('div');
        divDetails.setAttribute('class','content__item-details');

    let pDesc = document.createElement('p');
        pDesc.setAttribute('class', "content__desc");
        pDesc.innerText = description;

    divDetails.appendChild(pDesc);
    divContent.appendChild(head);
    divContent.appendChild(divDetails);

    itemMenu.insertBefore(divContent, itemMenu.children[1]);
}