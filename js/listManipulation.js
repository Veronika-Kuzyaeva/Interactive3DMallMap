var list = {
            'equipments' : {
                0: {
                    'equip_id' : 0,
                    'equip_name' : 'Staff #0',
                    'description' : 'Some desc 0',
                    'Xasis' : -1,
                    'Yasis' : -1
                },
                1: {
                    'equip_id' : 1,
                    'equip_name' : 'Staff #1',
                    'description' : 'Some desc 1',
                    'Xasis' : -1,
                    'Yasis' : -1
                },
                2: {
                    'equip_id' : 2,
                    'equip_name' : 'Staff #2',
                    'description' : 'Some desc 2',
                    'Xasis' : -1,
                    'Yasis' : -1
                }
        }
}

function showList(list = '') {
    var newList = document.querySelector('.container>aside>ul');
    
    // TODO: Add new group '-1' for placeless objects
    // TODO: Make free '-1' for filtration
    // TODO: Set button as new filter

    console.info(list);
    while (newList.firstChild) {
        newList.removeChild(newList.firstChild);
    }
    
    
    /* <li class="list__item" 
           data-level="1" 
           data-category="1" 
           data-space="1.01">
           <a href="#" class="list__link">
                Apple Heart
            </a>
        </li>
    */

    for (let index in list['equipments']) {
        console.info(index);
        var li = document.createElement('li');

        li.setAttribute("class", "list__item");
        li.setAttribute("data-level", "-1");

        var a = document.createElement('a');

        a.setAttribute('href', '#');
        a.setAttribute('class', 'list__link');
        a.innerText = list['equipments'][index]['equip_name'];

        li.appendChild(a);

        newList.appendChild(li);
    }
    

    //var ulGrupped = document.querySelector('');
}