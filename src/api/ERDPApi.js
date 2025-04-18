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
import NextGenDatapoint from '../model/NextGenDatapoint.js';
import NextGenSource from '../model/NextGenSource.js';

/**
* ERDP service.
* @module api/ERDPApi
* @version 1.0
*/
export default class ERDPApi {

    /**
    * Constructs a new ERDPApi. 
    * @alias module:api/ERDPApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }

    /**
     * Callback function to receive the result of the erdpDatapointsGet operation.
     * @callback module:api/ERDPApi~erdpDatapointsGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/NextGenDatapoint>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {module:api/ERDPApi~erdpDatapointsGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/NextGenDatapoint>}
     */
    erdpDatapointsGet(callback) {
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
      let returnType = [NextGenDatapoint];

      return this.apiClient.callApi(
        '/erdp/datapoints', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the erdpSourcesGet operation.
     * @callback module:api/ERDPApi~erdpSourcesGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/NextGenSource>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {module:api/ERDPApi~erdpSourcesGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/NextGenSource>}
     */
    erdpSourcesGet(callback) {
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
      let returnType = [NextGenSource];

      return this.apiClient.callApi(
        '/erdp/sources', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

}
