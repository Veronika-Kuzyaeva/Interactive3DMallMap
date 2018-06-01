class Content {
    /**
     * Create simply-modified content for object
     * 
     * @param {string} id 
     * @param {string} name 
     * @param {string} desc 
     * @param {string} floor
     * @param {number} x 
     * @param {number} y 
     */
    constructor(id, name, desc, floor = "-999", x = 0, y = 0 ) {
        this.id = id;
        this.name = name;
        this.desk = desk;
        this.floor = floor;
        this.x = x;
        this.y = y;

        this.category = (this.floor === "-999") ? 2 : 1;

        let itemMenu = document.getElementsByClassName('content')[0];
    
        let divContent = document.createElement('div');
            divContent.setAttribute('class', 'content__item');
            divContent.setAttribute('data-space', this.id);
            divContent.setAttribute('data-category', this.category);
    
        let head = document.createElement('h3');
            head.setAttribute('class','content__item-title');
            head.innerText = this.name;
    
        let divDetails = document.createElement('div');
            divDetails.setAttribute('class','content__item-details');
    
        let pDesc = document.createElement('p');
            pDesc.setAttribute('class', "content__desc");
            pDesc.innerText = this.desk;
    
        divDetails.appendChild(pDesc);
        divContent.appendChild(head);
        divContent.appendChild(divDetails);
    
        itemMenu.insertBefore(divContent, itemMenu.children[0]);
        
    }

    createPin() {
        let divPin = document.createElement('span');
            divPin.setAttribute('class', 'pin__icon');
            
        svgPin.appendTo(divPin);
        aPin.appendChild(divPin);

        let divLevelPins = document.body.getElementsByClassName('level__pins')[list[index]['floor_id']-1];
        
        divLevelPins.appendChild(aPin);
        createPin(list[index]['Xasis'], list[index]['Yasis'], list[index]['equip_id'], list[index]['floor_id']);
    }
}