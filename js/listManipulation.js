
    var list = {
                'equipments' : {
                    0: {
                        'equip_id' : 0,
                        'building_id' : 1,
                        'floor_id' : 1,
                        'equip_name' : 'Staff #0',
                        'description' : 'Some desc 0',
                        'Xasis' : 60,
                        'Yasis' : 50
                    },
                    1: {
                        'equip_id' : 1,
                        'building_id' : 1,
                        'floor_id' : 1,
                        'equip_name' : 'Staff #1',
                        'description' : 'Some desc 1',
                        'Xasis' : 20,
                        'Yasis' : 30
                    },
                    2: {
                        'equip_id' : 2,
                        'building_id' : 1,
                        'floor_id' : 3,
                        'equip_name' : 'Staff #2',
                        'description' : 'Some desc 2',
                        'Xasis' : 100,
                        'Yasis' : 120
                    },
                    4: {
                        'equip_id' : 3,
                        'building_id' : 1,
                        'floor_id' : 4,
                        'equip_name' : 'Staff #3',
                        'description' : 'Some desc 3',
                        'Xasis' : 5,
                        'Yasis' : 20
                    }
            }
    }

    function showList(list) {
        var newList = document.querySelector('.container>aside>ul');
        var itemMenu = document.getElementsByClassName('content')[0];

        console.info(list);
        /*
        while (newList.firstChild) {
            newList.removeChild(newList.firstChild);
        }
        */
        for (let index in list['equipments']) {
            console.info(index);
            
            //Add item to list
            var li = document.createElement('li');

            li.setAttribute("class", "list__item");
            li.setAttribute("data-level", list['equipments'][index]['floor_id']);
            li.setAttribute('data-category', '1');
            li.setAttribute('data-space', list['equipments'][index]['equip_id']);
            

            var a = document.createElement('a');

            a.setAttribute('href', '#');
            a.setAttribute('class', 'list__link');
            a.innerText = list['equipments'][index]['equip_name'];

            li.appendChild(a);

            newList.appendChild(li);

            //Add menu to item
            var divContent = document.createElement('div');
            
            divContent.setAttribute('class', 'content__item');
            divContent.setAttribute('data-space', list['equipments'][index]['equip_id']);
            divContent.setAttribute('data-category', '1');

            var head = document.createElement('h3');
            head.setAttribute('class','content__item-title');
            head.innerText = list['equipments'][index]['equip_name'];

            var divDetails = document.createElement('div');
            divDetails.setAttribute('class','content__item-details');

            var pDesc = document.createElement('p');
            pDesc.setAttribute('class', "content__desc");
            pDesc.innerText = list['equipments'][index]['description'];

            divDetails.appendChild(pDesc);
            divContent.appendChild(head);
            divContent.appendChild(divDetails);

            itemMenu.insertBefore(divContent, itemMenu.children[1]);
            //console.info(divContent);

            var aPin = document.createElement('a');
            aPin.setAttribute('class', 
                                'pin pin--' + list['equipments'][index]['floor_id'] + 
                                '-' + list['equipments'][index]['equip_id']);
            aPin.setAttribute('data-category', '1');
            aPin.setAttribute('data-space', list['equipments'][index]['equip_id']);
            aPin.setAttribute('href', '#');
            aPin.setAttribute('aria-label', 'Pin for ' + 
                                list['equipments'][index]['equip_name']);
                                


            var divPin = document.createElement('div');
            divPin.setAttribute('class', 'pin__icon');
            
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

            divPin.appendChild(imgPin);
            //spanPin.appendChild(svgPinLogo);
            aPin.appendChild(divPin);

            var divLevelPins = document.body.getElementsByClassName('level__pins')[list['equipments'][index]['floor_id']-1];
            console.info(divLevelPins);
            
            divLevelPins.appendChild(aPin);
        }
        
        //var ulGrupped = document.querySelector('');
    }

    showList(list);

