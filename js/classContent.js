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
        this.upload = false;

        this.category = (this.floor === "-999") ? 2 : 1;

        this.aPin = document.createElement('a');
        this.aPin.setAttribute('href', '#');
        this.aPin.setAttribute('data-space', this.id);
        this.aPin.setAttribute('aria-label', 'Pin for ' + this.name);

        this.divPin = document.createElement('div');
        this.divPin.setAttribute('class', 'pin__icon'); 

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
            pDesc.innerText = this.description;
        
        divDetails.appendChild(pDesc);
        divContent.appendChild(head);
        divContent.appendChild(divDetails);
    
        itemMenu.insertBefore(divContent, itemMenu.children[0]);

        if (this.category === 1){
            this.pinUpload();
            this.setFloor();
        }

        this.aPin.appendChild(this.divPin);
    }

    setFloor(floor = this.floor, x = this.x, y = this.y) {
        this.floor = floor;
        this.category = 1;
        
        if(!this.upload) {
            this.pinUpload();
        }

        this.aPin.setAttribute('class', 'pin pin--' + this.floor + '-' + this.id);
        this.aPin.setAttribute('data-category', this.category);

        this.setPinPosition(x, y);

        let divLevelPins = document.body.getElementsByClassName('level__pins')[this.floor-1];
        let content = document.querySelector('.content__item--current');

        if(content) {
            content.setAttribute("data-category", this.category);
        }
        
        divLevelPins.appendChild(this.aPin);
    }

    setPinPosition(x, y) {
        let rightClientSizeAttribute = (document.documentElement.clientWidth > document.documentElement.clientHeight) ? 
            document.documentElement.clientHeight : document.documentElement.clientWidth;
        // Some secret magic
        this.x = x * (100 / rightClientSizeAttribute) - 1;
        this.y = y * (100 / rightClientSizeAttribute) + 1;
        // HOT FLEXIBLE !!!
        this.aPin.style['left'] = this.x + 'vmin';
        this.aPin.style['top'] = this.y + 'vmin';
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
        Pin.appendTo(this.divPin);
        this.upload = true;
    }
}