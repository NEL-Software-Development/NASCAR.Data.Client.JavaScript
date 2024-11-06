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

import ApiClient from '../ApiClient.js';
import RunResult from './RunResult.js';

/**
* The PracticeRunResults model module.
* @module model/PracticeRunResults
* @version 1.0
*/
export default class PracticeRunResults {
    /**
    * Constructs a new <code>PracticeRunResults</code>.
    * @alias module:model/PracticeRunResults
    * @class
    */

    constructor() {
        
        
        
    }

    /**
    * Constructs a <code>PracticeRunResults</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/PracticeRunResults} obj Optional instance to populate.
    * @return {module:model/PracticeRunResults} The populated <code>PracticeRunResults</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PracticeRunResults();
                        
            
            if (data.hasOwnProperty('run_name')) {
                obj['run_name'] = ApiClient.convertToType(data['run_name'], 'String');
            }
            if (data.hasOwnProperty('run_state')) {
                obj['run_state'] = ApiClient.convertToType(data['run_state'], 'String');
            }
            if (data.hasOwnProperty('flag_state')) {
                obj['flag_state'] = ApiClient.convertToType(data['flag_state'], 'String');
            }
            if (data.hasOwnProperty('results')) {
                obj['results'] = ApiClient.convertToType(data['results'], [RunResult]);
            }
        }
        return obj;
    }

    /**
    * Run name
    * @member {String} run_name
    */
    'run_name' = undefined;
    /**
    * Run state:  (Inactive, Active, Completed)
    * @member {String} run_state
    */
    'run_state' = undefined;
    /**
    * Flag state:  (NONE, WARMUP, GREEN, YELLOW, RED, WHITE, FINISH, EXTRA)
    * @member {String} flag_state
    */
    'flag_state' = undefined;
    /**
    * Practice results
    * @member {Array.<module:model/RunResult>} results
    */
    'results' = undefined;




}
