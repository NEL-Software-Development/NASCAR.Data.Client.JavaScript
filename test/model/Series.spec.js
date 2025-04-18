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
    instance = new NascarDataClient.Series();
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

  describe('Series', function() {
    it('should create an instance of Series', function() {
      // uncomment below and update the code to test Series
      //var instane = new NascarDataClient.Series();
      //expect(instance).to.be.a(NascarDataClient.Series);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new NascarDataClient.Series();
      //expect(instance).to.be();
    });

    it('should have the property shortName (base name: "short_name")', function() {
      // uncomment below and update the code to test the property shortName
      //var instane = new NascarDataClient.Series();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instane = new NascarDataClient.Series();
      //expect(instance).to.be();
    });

    it('should have the property abbreviation (base name: "abbreviation")', function() {
      // uncomment below and update the code to test the property abbreviation
      //var instane = new NascarDataClient.Series();
      //expect(instance).to.be();
    });

    it('should have the property logo (base name: "logo")', function() {
      // uncomment below and update the code to test the property logo
      //var instane = new NascarDataClient.Series();
      //expect(instance).to.be();
    });

  });

}));
