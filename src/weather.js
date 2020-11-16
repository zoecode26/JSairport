class Weather{
  forecast(){
    randValue = Math.floor(Math.random() * 10);
    if (randValue > 6){
      return "stormy"; 
    }
    else{
      return "sunny";
    }
  }
}
