describe('Airport', function() {
  it ('creates an empty array of planes', function(){
    airport = new Airport;
    expect(airport.planes).toEqual([]);
  });

  it ('sets the capacity of the airport to 100 if no capacity is given', function(){
    spyOn(Math, "random").and.returnValue(2);
    airport = new Airport;
    expect(airport.capacity).toEqual(100);
  });

  it ('overwrites default capacity if capacity argument given', function(){
    spyOn(Math, "random").and.returnValue(2);
    airport = new Airport(75);
    expect(airport.capacity).toEqual(75);
  });
});
