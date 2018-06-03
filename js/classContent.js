class Content {
    /**
     * Create simply-modified content for object
     * 
     * @param {string} id 
     * @param {string} name 
     * @param {string} description 
     * @param {string} floor
     * @param {number} x 
     * @param {number} y 
     */
    constructor(id, name, description, floor, x, y ) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.floor = floor.toString();
        this.x = x;
        this.y = y;

        this.category = (this.floor === "-999") ? 2 : 1;
        this.svgPin;

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
        
        this.pinUpload();
        (this.category === 1) ? this.createPin(this.floor, this.x, this.y) : NaN;
    }

    createPin(floor, x, y) {
        this.floor = floor;
        this.x = x;
        this.y = y;
        this.category = 1;

        let aPin = document.createElement('a');
            aPin.setAttribute('class', 'pin pin--' + this.floor + '-' + this.id);
            aPin.setAttribute('data-category', this.category);
            aPin.setAttribute('data-space', this.id);
            aPin.setAttribute('href', '#');
            aPin.setAttribute('aria-label', 'Pin for ' + this.name);                                
        
        let divPin = document.createElement('div');
            divPin.setAttribute('class', 'pin__icon');
        
        // NOT FLEXIBLE !!!
        aPin.style['left'] = x + 'px';
        aPin.style['top'] = y + 'px';

        this.svgPin.appendTo(divPin);
        aPin.appendChild(divPin);

        let divLevelPins = document.body.getElementsByClassName('level__pins')[this.floor-1];
        
        divLevelPins.appendChild(aPin);
    }

    dropPin() {
        this.floor = "-999";
        this.x = 0;
        this.y = 0;
        this.category = 2;

		let pin = document.querySelector('.pin--active');
		let level = document.querySelector('.level__pins--active');
		let content = document.querySelector('.content__item--current');
			content.setAttribute("data-category", this.category);

		level.removeChild(pin);
    }
    
    pinUpload() {
        let Pin = Snap();
        Snap.load("img/pin.svg", (f) => {
            Pin.append(f.select("symbol"));
        });
        this.svgPin = Pin;     
    }
}