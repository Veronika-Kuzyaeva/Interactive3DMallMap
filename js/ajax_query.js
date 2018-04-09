function setAjaxQuery(X=5, Y=5, floor=2, building = 1) {
    console.info('working');

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
