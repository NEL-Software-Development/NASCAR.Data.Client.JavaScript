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
    instance = new NascarDataClient.Driver();
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

  describe('Driver', function() {
    it('should create an instance of Driver', function() {
      // uncomment below and update the code to test Driver
      //var instane = new NascarDataClient.Driver();
      //expect(instance).to.be.a(NascarDataClient.Driver);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new NascarDataClient.Driver();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instane = new NascarDataClient.Driver();
      //expect(instance).to.be();
    });

    it('should have the property dateOfBirth (base name: "date_of_birth")', function() {
      // uncomment below and update the code to test the property dateOfBirth
      //var instane = new NascarDataClient.Driver();
      //expect(instance).to.be();
    });

    it('should have the property dateOfDeath (base name: "date_of_death")', function() {
      // uncomment below and update the code to test the property dateOfDeath
      //var instane = new NascarDataClient.Driver();
      //expect(instance).to.be();
    });

    it('should have the property hometownCity (base name: "hometown_city")', function() {
      // uncomment below and update the code to test the property hometownCity
      //var instane = new NascarDataClient.Driver();
      //expect(instance).to.be();
    });

    it('should have the property hometownState (base name: "hometown_state")', function() {
      // uncomment below and update the code to test the property hometownState
      //var instane = new NascarDataClient.Driver();
      //expect(instance).to.be();
    });

    it('should have the property hometownCountry (base name: "hometown_country")', function() {
      // uncomment below and update the code to test the property hometownCountry
      //var instane = new NascarDataClient.Driver();
      //expect(instance).to.be();
    });

    it('should have the property residesCity (base name: "resides_city")', function() {
      // uncomment below and update the code to test the property residesCity
      //var instane = new NascarDataClient.Driver();
      //expect(instance).to.be();
    });

    it('should have the property residesState (base name: "resides_state")', function() {
      // uncomment below and update the code to test the property residesState
      //var instane = new NascarDataClient.Driver();
      //expect(instance).to.be();
    });

    it('should have the property residesCountry (base name: "resides_country")', function() {
      // uncomment below and update the code to test the property residesCountry
      //var instane = new NascarDataClient.Driver();
      //expect(instance).to.be();
    });

    it('should have the property series1RookieYear (base name: "series_1_rookie_year")', function() {
      // uncomment below and update the code to test the property series1RookieYear
      //var instane = new NascarDataClient.Driver();
      //expect(instance).to.be();
    });

    it('should have the property series2RookieYear (base name: "series_2_rookie_year")', function() {
      // uncomment below and update the code to test the property series2RookieYear
      //var instane = new NascarDataClient.Driver();
      //expect(instance).to.be();
    });

    it('should have the property series3RookieYear (base name: "series_3_rookie_year")', function() {
      // uncomment below and update the code to test the property series3RookieYear
      //var instane = new NascarDataClient.Driver();
      //expect(instance).to.be();
    });

    it('should have the property hobbies (base name: "hobbies")', function() {
      // uncomment below and update the code to test the property hobbies
      //var instane = new NascarDataClient.Driver();
      //expect(instance).to.be();
    });

  });

}));
