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
    instance = new NascarDataClient.Caution();
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

  describe('Caution', function() {
    it('should create an instance of Caution', function() {
      // uncomment below and update the code to test Caution
      //var instane = new NascarDataClient.Caution();
      //expect(instance).to.be.a(NascarDataClient.Caution);
    });

    it('should have the property lapStart (base name: "lap_start")', function() {
      // uncomment below and update the code to test the property lapStart
      //var instane = new NascarDataClient.Caution();
      //expect(instance).to.be();
    });

    it('should have the property lapEnd (base name: "lap_end")', function() {
      // uncomment below and update the code to test the property lapEnd
      //var instane = new NascarDataClient.Caution();
      //expect(instance).to.be();
    });

    it('should have the property beneficiary (base name: "beneficiary")', function() {
      // uncomment below and update the code to test the property beneficiary
      //var instane = new NascarDataClient.Caution();
      //expect(instance).to.be();
    });

    it('should have the property comment (base name: "comment")', function() {
      // uncomment below and update the code to test the property comment
      //var instane = new NascarDataClient.Caution();
      //expect(instance).to.be();
    });

    it('should have the property reason (base name: "reason")', function() {
      // uncomment below and update the code to test the property reason
      //var instane = new NascarDataClient.Caution();
      //expect(instance).to.be();
    });

    it('should have the property flagTime (base name: "flag_time")', function() {
      // uncomment below and update the code to test the property flagTime
      //var instane = new NascarDataClient.Caution();
      //expect(instance).to.be();
    });

  });

}));
