describe('Plane', function() {
  describe('#land', function(){
    it('lands plane and adds it to the planes array', function(){
      spyOn(Math, "random").and.returnValue(2);
      plane = new Plane;
      airport = new Airport;
      plane.land(airport);
      expect(airport.planes).toContain(plane)
    });

    it('ensures the correct plane is being landed', function(){
      spyOn(Math, "random").and.returnValue(2);
      airport = new Airport;

      plane1 = new Plane;
      plane2 = new Plane;

      plane1.land(airport);
      plane2.land(airport);

      plane1.take_off(airport);
      plane2.take_off(airport);

      plane2.land(airport)
      expect(airport.planes).toEqual([plane2]);
    });

    it("won\'t allow plane to be landed again", function(){
      spyOn(Math, "random").and.returnValue(2);
      airport = new Airport;
      plane = new Plane;

      plane.land(airport);
      message = "PLANE ALREADY LANDED";
      expect(function() { plane.land(airport) } ).toThrow(message);
    });
  });

  describe('#take_off', function(){
    it('allows plane to take_off and plane is removed from planes array', function(){
      spyOn(Math, "random").and.returnValue(2);
      airport = new Airport;
      plane = new Plane;
      plane.land(airport);
      expect(airport.planes).toContain(plane);
      plane.take_off(airport);
      expect(airport.planes).toEqual([]);
    });

    it('ensures the correct plane is taking off', function(){
      spyOn(Math, "random").and.returnValue(2);
      airport = new Airport;
      
      plane1 = new Plane;
      plane2 = new Plane;

      plane1.land(airport);
      plane2.land(airport);

      plane2.take_off(airport);
      expect(airport.planes).toEqual([plane1]);
    });

    it('won\'t allow a plane not at the specified airport to take off', function(){
      spyOn(Math, "random").and.returnValue(2);
      airport = new Airport;
      airport2 = new Airport;
      plane = new Plane;
      plane2 = new Plane;

      plane.land(airport)
      plane2.land(airport2)

      message = "PLANE NOT AT AIRPORT"
      expect(function() { plane.take_off(airport2) } ).toThrow(message);
    });

    it('won\'t allow a plane to land if the airport is full', function(){
      spyOn(Math, "random").and.returnValue(2);
      airport = new Airport(5); 
      for(var i=0; i< 5; i++){
        plane = new Plane;
        plane.land(airport);
      } 
      plane = new Plane;
      expect(function() { plane.land(airport) } ).toThrow("AIRPORT FULL");
    });

    it('won\'t allow a plane to take off if the airport is empty', function(){
      spyOn(Math, "random").and.returnValue(2);
      airport = new Airport
      plane = new Plane
      expect(function() { plane.take_off(airport) } ).toThrow("AIRPORT EMPTY");
    });
  });
});