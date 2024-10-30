/**
 * NASCAR.Data.API
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.NascarDataClient);
  }
}(this, function(expect, NascarDataClient) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new NascarDataClient.Flag();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('Flag', function() {
    it('should create an instance of Flag', function() {
      // uncomment below and update the code to test Flag
      //var instane = new NascarDataClient.Flag();
      //expect(instance).to.be.a(NascarDataClient.Flag);
    });

    it('should have the property startLap (base name: "start_lap")', function() {
      // uncomment below and update the code to test the property startLap
      //var instane = new NascarDataClient.Flag();
      //expect(instance).to.be();
    });

    it('should have the property finishLap (base name: "finish_lap")', function() {
      // uncomment below and update the code to test the property finishLap
      //var instane = new NascarDataClient.Flag();
      //expect(instance).to.be();
    });

    it('should have the property numberOfLaps (base name: "number_of_laps")', function() {
      // uncomment below and update the code to test the property numberOfLaps
      //var instane = new NascarDataClient.Flag();
      //expect(instance).to.be();
    });

    it('should have the property elapsedTime (base name: "elapsed_time")', function() {
      // uncomment below and update the code to test the property elapsedTime
      //var instane = new NascarDataClient.Flag();
      //expect(instance).to.be();
    });

    it('should have the property time (base name: "time")', function() {
      // uncomment below and update the code to test the property time
      //var instane = new NascarDataClient.Flag();
      //expect(instance).to.be();
    });

    it('should have the property duration (base name: "duration")', function() {
      // uncomment below and update the code to test the property duration
      //var instane = new NascarDataClient.Flag();
      //expect(instance).to.be();
    });

    it('should have the property flagState (base name: "flag_state")', function() {
      // uncomment below and update the code to test the property flagState
      //var instane = new NascarDataClient.Flag();
      //expect(instance).to.be();
    });

    it('should have the property comment (base name: "comment")', function() {
      // uncomment below and update the code to test the property comment
      //var instane = new NascarDataClient.Flag();
      //expect(instance).to.be();
    });

  });

}));
