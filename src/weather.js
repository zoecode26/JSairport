class Weather{

  forecast(){
    var randValue = Math.floor(Math.random());
    console.log(randValue)
    if (randValue > 6){
      return "stormy"; 
    }
    else{
      return "sunny"; 
    }
  }
}
