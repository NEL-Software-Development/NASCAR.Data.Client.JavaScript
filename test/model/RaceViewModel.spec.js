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
    instance = new NascarDataClient.RaceViewModel();
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

  describe('RaceViewModel', function() {
    it('should create an instance of RaceViewModel', function() {
      // uncomment below and update the code to test RaceViewModel
      //var instane = new NascarDataClient.RaceViewModel();
      //expect(instance).to.be.a(NascarDataClient.RaceViewModel);
    });

    it('should have the property seriesId (base name: "series_id")', function() {
      // uncomment below and update the code to test the property seriesId
      //var instane = new NascarDataClient.RaceViewModel();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instane = new NascarDataClient.RaceViewModel();
      //expect(instance).to.be();
    });

    it('should have the property promoter (base name: "promoter")', function() {
      // uncomment below and update the code to test the property promoter
      //var instane = new NascarDataClient.RaceViewModel();
      //expect(instance).to.be();
    });

    it('should have the property laps (base name: "laps")', function() {
      // uncomment below and update the code to test the property laps
      //var instane = new NascarDataClient.RaceViewModel();
      //expect(instance).to.be();
    });

    it('should have the property distance (base name: "distance")', function() {
      // uncomment below and update the code to test the property distance
      //var instane = new NascarDataClient.RaceViewModel();
      //expect(instance).to.be();
    });

    it('should have the property _date (base name: "date")', function() {
      // uncomment below and update the code to test the property _date
      //var instane = new NascarDataClient.RaceViewModel();
      //expect(instance).to.be();
    });

    it('should have the property comments (base name: "comments")', function() {
      // uncomment below and update the code to test the property comments
      //var instane = new NascarDataClient.RaceViewModel();
      //expect(instance).to.be();
    });

    it('should have the property cautions (base name: "cautions")', function() {
      // uncomment below and update the code to test the property cautions
      //var instane = new NascarDataClient.RaceViewModel();
      //expect(instance).to.be();
    });

    it('should have the property entries (base name: "entries")', function() {
      // uncomment below and update the code to test the property entries
      //var instane = new NascarDataClient.RaceViewModel();
      //expect(instance).to.be();
    });

    it('should have the property infractions (base name: "infractions")', function() {
      // uncomment below and update the code to test the property infractions
      //var instane = new NascarDataClient.RaceViewModel();
      //expect(instance).to.be();
    });

    it('should have the property lapLeaders (base name: "lap_Leaders")', function() {
      // uncomment below and update the code to test the property lapLeaders
      //var instane = new NascarDataClient.RaceViewModel();
      //expect(instance).to.be();
    });

    it('should have the property loopStats (base name: "loop_Stats")', function() {
      // uncomment below and update the code to test the property loopStats
      //var instane = new NascarDataClient.RaceViewModel();
      //expect(instance).to.be();
    });

    it('should have the property pitstops (base name: "pitstops")', function() {
      // uncomment below and update the code to test the property pitstops
      //var instane = new NascarDataClient.RaceViewModel();
      //expect(instance).to.be();
    });

    it('should have the property practiceResults (base name: "practice_results")', function() {
      // uncomment below and update the code to test the property practiceResults
      //var instane = new NascarDataClient.RaceViewModel();
      //expect(instance).to.be();
    });

    it('should have the property qualifyingResults (base name: "qualifying_results")', function() {
      // uncomment below and update the code to test the property qualifyingResults
      //var instane = new NascarDataClient.RaceViewModel();
      //expect(instance).to.be();
    });

    it('should have the property raceResults (base name: "race_results")', function() {
      // uncomment below and update the code to test the property raceResults
      //var instane = new NascarDataClient.RaceViewModel();
      //expect(instance).to.be();
    });

    it('should have the property runs (base name: "runs")', function() {
      // uncomment below and update the code to test the property runs
      //var instane = new NascarDataClient.RaceViewModel();
      //expect(instance).to.be();
    });

    it('should have the property stageResults (base name: "stage_results")', function() {
      // uncomment below and update the code to test the property stageResults
      //var instane = new NascarDataClient.RaceViewModel();
      //expect(instance).to.be();
    });

    it('should have the property schedule (base name: "schedule")', function() {
      // uncomment below and update the code to test the property schedule
      //var instane = new NascarDataClient.RaceViewModel();
      //expect(instance).to.be();
    });

  });

}));
