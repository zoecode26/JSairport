describe('Weather', function() {
  it ('randomly generates stormy weather', function(){
    
    spyOn(Math, "random").and.returnValue(8);
    weather = new Weather;
    
    expect(weather.forecast()).toEqual("stormy");
  });
});

describe('Weather', function() {

  it ('randomly generates sunny weather', function(){
    
    spyOn(Math, "random").and.returnValue(2);
    weather = new Weather;
    
    expect(weather.forecast()).toEqual("sunny");
  });
});
