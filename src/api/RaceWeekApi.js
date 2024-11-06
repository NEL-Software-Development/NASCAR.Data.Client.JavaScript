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

import ApiClient from "../ApiClient.js";
import RaceWeek from '../model/RaceWeek.js';
import RaceWeekDetails from '../model/RaceWeekDetails.js';

/**
* RaceWeek service.
* @module api/RaceWeekApi
* @version 1.0
*/
export default class RaceWeekApi {

    /**
    * Constructs a new RaceWeekApi. 
    * @alias module:api/RaceWeekApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }

    /**
     * Callback function to receive the result of the raceWeekDetailsGet operation.
     * @callback module:api/RaceWeekApi~raceWeekDetailsGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RaceWeekDetails} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Object} opts Optional parameters
     * @param {module:api/RaceWeekApi~raceWeekDetailsGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/RaceWeekDetails}
     */
    raceWeekDetailsGet(opts, callback) {
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
      let returnType = RaceWeekDetails;

      return this.apiClient.callApi(
        '/race-week/details', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the raceWeekLiveGet operation.
     * @callback module:api/RaceWeekApi~raceWeekLiveGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/RaceWeek>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {module:api/RaceWeekApi~raceWeekLiveGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/RaceWeek>}
     */
    raceWeekLiveGet(callback) {
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['Bearer'];
      let contentTypes = [];
      let accepts = ['text/plain', 'application/json', 'text/json'];
      let returnType = [RaceWeek];

      return this.apiClient.callApi(
        '/race-week/live', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the raceWeekSeasonGet operation.
     * @callback module:api/RaceWeekApi~raceWeekSeasonGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/RaceWeek>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Object} opts Optional parameters
     * @param {module:api/RaceWeekApi~raceWeekSeasonGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/RaceWeek>}
     */
    raceWeekSeasonGet(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'season': opts['season']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['Bearer'];
      let contentTypes = [];
      let accepts = ['text/plain', 'application/json', 'text/json'];
      let returnType = [RaceWeek];

      return this.apiClient.callApi(
        '/race-week/season', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

}
