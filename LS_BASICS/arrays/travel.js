let destinations = ['Prague', 'London', 'Sydney', 'Belfast', 'Rome',
  'Aruba', 'Paris', 'Bora Bora', 'Barcelona', 'Rio de Janeiro',
  'Marrakesh', 'New York City'];

  function checkArray(city, arr) {
    for(let i=0; i<arr.length; i++) {
      if(city === arr[i]) {

        return true
      }
    }
    return false;
  }

  checkArray("Barcelona", destinations);
  checkArray("Nashville", destinations);

  console.log(checkArray("Barcelona", destinations), checkArray("Nashville", destinations))