'use strict';

describe('Plane', function() {
  var plane;
  var airport;

  beforeEach(function(){
    plane = new Plane();
    airport = jasmine.createSpyObj('airport', ['clearForLanding', 'clearForTakeOff']);
  });

  it('lands a plane at an airport', function() {
    plane.land(airport);
    expect(airport.clearForLanding).toHaveBeenCalledWith(plane);
  });

  it('can take off from an airport', function(){
    plane.land(airport);
    plane.takeOff(airport);
    expect(airport.clearForTakeOff).toHaveBeenCalled();
  });

});
