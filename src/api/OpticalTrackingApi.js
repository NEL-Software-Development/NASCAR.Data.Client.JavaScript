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
import OpticalTrackingUTMOffset from '../model/OpticalTrackingUTMOffset.js';

/**
* OpticalTracking service.
* @module api/OpticalTrackingApi
* @version 1.0
*/
export default class OpticalTrackingApi {

    /**
    * Constructs a new OpticalTrackingApi. 
    * @alias module:api/OpticalTrackingApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }

    /**
     * Callback function to receive the result of the opticalTrackingUtmOffsetsGet operation.
     * @callback module:api/OpticalTrackingApi~opticalTrackingUtmOffsetsGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/OpticalTrackingUTMOffset>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {module:api/OpticalTrackingApi~opticalTrackingUtmOffsetsGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/OpticalTrackingUTMOffset>}
     */
    opticalTrackingUtmOffsetsGet(callback) {
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
      let returnType = [OpticalTrackingUTMOffset];

      return this.apiClient.callApi(
        '/optical-tracking/utm-offsets', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

}
