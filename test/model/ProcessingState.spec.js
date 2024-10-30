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
    instance = new NascarDataClient.ProcessingState();
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

  describe('ProcessingState', function() {
    it('should create an instance of ProcessingState', function() {
      // uncomment below and update the code to test ProcessingState
      //var instane = new NascarDataClient.ProcessingState();
      //expect(instance).to.be.a(NascarDataClient.ProcessingState);
    });

    it('should have the property category (base name: "Category")', function() {
      // uncomment below and update the code to test the property category
      //var instane = new NascarDataClient.ProcessingState();
      //expect(instance).to.be();
    });

    it('should have the property intervalInSeconds (base name: "IntervalInSeconds")', function() {
      // uncomment below and update the code to test the property intervalInSeconds
      //var instane = new NascarDataClient.ProcessingState();
      //expect(instance).to.be();
    });

    it('should have the property action (base name: "Action")', function() {
      // uncomment below and update the code to test the property action
      //var instane = new NascarDataClient.ProcessingState();
      //expect(instance).to.be();
    });

    it('should have the property lastRun (base name: "LastRun")', function() {
      // uncomment below and update the code to test the property lastRun
      //var instane = new NascarDataClient.ProcessingState();
      //expect(instance).to.be();
    });

    it('should have the property actionDetailId (base name: "ActionDetailId")', function() {
      // uncomment below and update the code to test the property actionDetailId
      //var instane = new NascarDataClient.ProcessingState();
      //expect(instance).to.be();
    });

    it('should have the property value (base name: "Value")', function() {
      // uncomment below and update the code to test the property value
      //var instane = new NascarDataClient.ProcessingState();
      //expect(instance).to.be();
    });

    it('should have the property isActive (base name: "IsActive")', function() {
      // uncomment below and update the code to test the property isActive
      //var instane = new NascarDataClient.ProcessingState();
      //expect(instance).to.be();
    });

  });

}));
