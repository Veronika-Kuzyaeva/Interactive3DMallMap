
    let list = [
                    {
                        'equip_id' : 0,
                        'building_id' : 1,
                        'floor_id' : 1,
                        'equip_name' : 'Staff #0',
                        'description' : 'Some desc 0',
                        'Xasis' : 60,
                        'Yasis' : 50
                    },
                    {
                        'equip_id' : 1,
                        'building_id' : 1,
                        'floor_id' : 1,
                        'equip_name' : 'Staff #1',
                        'description' : 'Some desc 1',
                        'Xasis' : 20,
                        'Yasis' : 30
                    },
                    {
                        'equip_id' : 2,
                        'building_id' : 1,
                        'floor_id' : 3,
                        'equip_name' : 'Staff #2',
                        'description' : 'Some desc 2',
                        'Xasis' : 100,
                        'Yasis' : 120
                    },
                    {
                        'equip_id' : 3,
                        'building_id' : 1,
                        'floor_id' : 4,
                        'equip_name' : 'Staff #3',
                        'description' : 'Some desc 3',
                        'Xasis' : 5,
                        'Yasis' : 20
                    },

                    {
                        'equip_id' : 4,
                        'building_id' : -999,
                        'floor_id' : -999,
                        'equip_name' : 'Staff #Undef',
                        'description' : 'SUUUNDEEEFFFFF',
                        'Xasis' : -999,
                        'Yasis' : -999
                    }

                ]

    function showList(list, category) {
        var newList = document.querySelector('.container>aside>ul');
        var itemMenu = document.getElementsByClassName('content')[0];

        console.info(list);
        /*
        while (newList.firstChild) {
            newList.removeChild(newList.firstChild);
        }
        */
        for (let index in list) {
            console.info(index);
            
            //Add item to list
            let li = document.createElement('li');

            li.setAttribute("class", "list__item");
            li.setAttribute("data-level", list[index]['floor_id']);
            li.setAttribute('data-category', category);
            li.setAttribute('data-space', list[index]['equip_id']);
            

            let a = document.createElement('a');

            a.setAttribute('href', '#');
            a.setAttribute('class', 'list__link');
            a.innerText = list[index]['equip_name'];

            li.appendChild(a);

            newList.appendChild(li);

            //Add menu to item
            let divContent = document.createElement('div');
            
            divContent.setAttribute('class', 'content__item');
            divContent.setAttribute('data-space', list[index]['equip_id']);
            divContent.setAttribute('data-category', category);

            let head = document.createElement('h3');
            head.setAttribute('class','content__item-title');
            head.innerText = list[index]['equip_name'];

            let divDetails = document.createElement('div');
            divDetails.setAttribute('class','content__item-details');

            let pDesc = document.createElement('p');
            pDesc.setAttribute('class', "content__desc");
            pDesc.innerText = list[index]['description'];

            divDetails.appendChild(pDesc);
            divContent.appendChild(head);
            divContent.appendChild(divDetails);

            itemMenu.insertBefore(divContent, itemMenu.children[1]);
            //console.info(divContent);

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

            /*
            var imgPin = document.createElement('img');
            imgPin.setAttribute('src', 'img/pin.svg');
            imgPin.setAttribute('class', 'icon icon--pin');
            
            /*
            var svgPinLogo = document.createElement('svg');
            svgPinLogo.setAttribute('class', "icon icon--logo icon--origami");
            */
            
            /**
             * <div class="surroundings">
                                    <img class="surroundings__map" src="img/surroundings.svg" alt="Surroundings"/>
                                </div>
            */

            //divPin.appendChild(s);
            //spanPin.appendChild(svgPinLogo);
            aPin.appendChild(divPin);

            let divLevelPins = document.body.getElementsByClassName('level__pins')[list[index]['floor_id']-1];
            console.info(divLevelPins);
            
            divLevelPins.appendChild(aPin);

        }
        
        //var ulGrupped = document.querySelector('');
    }

    console.log(list);
    showList(list.filter((item) => item.building_id == 1), 1);
    //showList(list.filter((item) => item.building_id == -999), 2);

