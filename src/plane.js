class Plane{
  land(airport){
    if (airport.weather == "stormy"){
      throw "WEATHER IS STORMY - CANNOT LAND";
    }
    else if(airport.planes.includes(this)){
      throw "PLANE ALREADY LANDED";
    }
    else if(airport.planes.length == airport.capacity){
      throw "AIRPORT FULL"
    }
    else{
    airport.planes.push(this);
    }
  }

  take_off(airport){
    if(airport.weather == "stormy"){
      throw "WEATHER IS STORMY - CANNOT TAKE OFF";
    }
    else if(airport.planes.length == 0){
      throw "AIRPORT EMPTY";
    }
    else if (!airport.planes.includes(this)){
      throw "PLANE NOT AT AIRPORT";
    }
    else{
      var pos = airport.planes.indexOf(this);
      airport.planes.splice(pos, 1);
    }
  }
}
