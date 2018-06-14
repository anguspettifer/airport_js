'use strict';
// What is this?

describe ("Feature test", function() {
  var airport;
  var plane;

  beforeEach(function(){
    airport = new Airport();
    plane = new Plane();
  });

  describe ("air traffic controller", function(){

    it("instructs plane to land", function() {
      plane.land(airport);
      expect(airport.planes()).toContain(plane);
    });

    it('instructs a plane to take off', function(){
      plane.land(airport);
      plane.takeOff(airport);
      expect(airport.planes()).not.toContain(plane);
    });

  });

})