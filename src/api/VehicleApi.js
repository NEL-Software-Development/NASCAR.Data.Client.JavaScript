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

import ApiClient from "../ApiClient";
import RaceResultSummary from '../model/RaceResultSummary';
import VehicleDetails from '../model/VehicleDetails';

/**
* Vehicle service.
* @module api/VehicleApi
* @version 1.0
*/
export default class VehicleApi {

    /**
    * Constructs a new VehicleApi. 
    * @alias module:api/VehicleApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }

    /**
     * Callback function to receive the result of the vehicleGet operation.
     * @callback module:api/VehicleApi~vehicleGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/VehicleDetails} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Object} opts Optional parameters
     * @param {module:api/VehicleApi~vehicleGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/VehicleDetails}
     */
    vehicleGet(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'id': opts['id']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['Bearer'];
      let contentTypes = [];
      let accepts = ['text/plain', 'application/json', 'text/json'];
      let returnType = VehicleDetails;

      return this.apiClient.callApi(
        '/vehicle', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the vehicleSeasonFinishesGet operation.
     * @callback module:api/VehicleApi~vehicleSeasonFinishesGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/RaceResultSummary>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Object} opts Optional parameters
     * @param {module:api/VehicleApi~vehicleSeasonFinishesGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/RaceResultSummary>}
     */
    vehicleSeasonFinishesGet(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'season': opts['season'],
        'series_id': opts['seriesId'],
        'vehicle': opts['vehicle']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['Bearer'];
      let contentTypes = [];
      let accepts = ['text/plain', 'application/json', 'text/json'];
      let returnType = [RaceResultSummary];

      return this.apiClient.callApi(
        '/vehicle/season-finishes', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

}
