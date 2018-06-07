function setAjaxQuery(X=5, Y=5, floor=2, building = 1) {

    var json = {
        X: X,
        Y: Y,
        floor: floor,
        building: building
    };

    //var data =JSON.parse

    axios.post('https://localhost/unimap/server.php', {
        //contentType: 'application/json; charset=UTF-8',
        json
      })
      .then(function (response) {
        console.log(JSON.parse(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
}

var list = [
  {
    'equip_id' : 0,
    'building_id' : 1,
    'floor_id' : 1,
    'equip_name' : 'Staff #0',
    'description' : 'Some desc 0Some desc 0Some desc 0Some desc 0Some desc 0Some desc 0Some desc 0Some desc 0Some desc 0Some desc 0Some desc 0Some desc 0Some desc 0Some desc 0Some desc 0Some desc 0Some desc 0Some desc 0Some desc 0Some desc 0Some desc 0Some desc 0Some desc 0Some desc 0Some desc 0Some desc 0Some desc 0Some desc 0Some desc 0Some desc 0Some desc 0Some desc 0Some desc 0Some desc 0Some desc 0Some desc 0Some desc 0Some desc 0Some desc 0Some desc 0Some desc 0Some desc 0Some desc 0Some desc 0Some desc 0Some desc 0Some desc 0Some desc 0Some desc 0Some desc 0Some desc 0Some desc 0Some desc 0Some desc 0Some desc 0Some desc 0Some desc 0Some desc 0Some desc 0Some desc 0Some desc 0Some desc 0Some desc 0Some desc 0Some desc 0Some desc 0Some desc 0Some desc 0Some desc 0Some desc 0Some desc 0Some desc 0Some desc 0Some desc 0Some desc 0Some desc 0Some desc 0Some desc 0Some desc 0Some desc 0Some desc 0Some desc 0Some desc 0Some desc 0Some desc 0Some desc 0Some desc 0Some desc 0Some desc 0Some desc 0Some desc 0Some desc 0Some desc 0Some desc 0Some desc 0Some desc 0Some desc 0Some desc 0Some desc 0Some desc 0Some desc 0Some desc 0Some desc 0Some desc 0Some desc 0Some desc 0Some desc 0Some desc 0Some desc 0Some desc 0Some desc 0Some desc 0Some desc 0Some desc 0Some desc 0Some desc 0Some desc 0Some desc 0Some desc 0Some desc 0Some desc 0Some desc 0Some desc 0Some desc 0Some desc 0Some desc 0Some desc 0Some desc 0Some desc 0Some desc 0Some desc 0Some desc 0Some desc 0Some desc 0Some desc 0Some desc 0Some desc 0Some desc 0Some desc 0Some desc 0Some desc 0Some desc 0Some desc 0Some desc 0Some desc 0Some desc 0Some desc 0',
    'Xasis' : 60,
    'Yasis' : 50
  },
  {
    'equip_id' : 1,
    'building_id' : 1,
    'floor_id' : 1,
    'equip_name' : 'Staff #1',
    'description' : 'Some desc 1',
    'Xasis' : 250,
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
    'equip_name' : 'Staff #Undef1',
    'description' : 'SUUUNDEEEFFFFF',
    'Xasis' : -999,
    'Yasis' : -999
  },

  {
    'equip_id' : 5,
    'building_id' : -999,
    'floor_id' : -999,
    'equip_name' : 'Staff #Undef2',
    'description' : 'SUUUNDEEEFFFFF',
    'Xasis' : -999,
    'Yasis' : -999
  }
]

var floors = [];

for(var i = 1; i <= 4; i++) {
  floors.push({
    id: `${i}`,
    link: "img/buildings/first_building/level_2.svg",
    level: i
  });
}
