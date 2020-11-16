describe('Airport', function() {
  beforeEach(function() {
    
  });

  it ('creates an empty array of planes', function(){
    airport = new Airport;
    expect(airport.planes).toEqual([]);
  });

  it ('sets the capacity of the airport to 100 if no capacity is given', function(){
    // allow(subject).to receive(:rand).and_return(1)
    expect(airport.capacity).toEqual(100);
  });

  it ('overwrites default capacity if capacity argument given', function(){
    airport = new Airport(75);
    // allow(airport).to receive(:rand).and_return(1)
    expect(airport.capacity).toEqual(75);
  });
});
