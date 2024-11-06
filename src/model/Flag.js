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

/**
* The Flag model module.
* @module model/Flag
* @version 1.0
*/
export default class Flag {
    /**
    * Constructs a new <code>Flag</code>.
    * @alias module:model/Flag
    * @class
    */

    constructor() {
        
        
        
    }

    /**
    * Constructs a <code>Flag</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/Flag} obj Optional instance to populate.
    * @return {module:model/Flag} The populated <code>Flag</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Flag();
                        
            
            if (data.hasOwnProperty('start_lap')) {
                obj['start_lap'] = ApiClient.convertToType(data['start_lap'], 'Number');
            }
            if (data.hasOwnProperty('finish_lap')) {
                obj['finish_lap'] = ApiClient.convertToType(data['finish_lap'], 'Number');
            }
            if (data.hasOwnProperty('number_of_laps')) {
                obj['number_of_laps'] = ApiClient.convertToType(data['number_of_laps'], 'Number');
            }
            if (data.hasOwnProperty('elapsed_time')) {
                obj['elapsed_time'] = ApiClient.convertToType(data['elapsed_time'], 'Number');
            }
            if (data.hasOwnProperty('time')) {
                obj['time'] = ApiClient.convertToType(data['time'], 'Date');
            }
            if (data.hasOwnProperty('duration')) {
                obj['duration'] = ApiClient.convertToType(data['duration'], 'Number');
            }
            if (data.hasOwnProperty('flag_state')) {
                obj['flag_state'] = ApiClient.convertToType(data['flag_state'], 'String');
            }
            if (data.hasOwnProperty('comment')) {
                obj['comment'] = ApiClient.convertToType(data['comment'], 'String');
            }
        }
        return obj;
    }

    /**
    * The flag's first lap
    * @member {Number} start_lap
    */
    'start_lap' = undefined;
    /**
    * The flag's last lap
    * @member {Number} finish_lap
    */
    'finish_lap' = undefined;
    /**
    * Total number of laps
    * @member {Number} number_of_laps
    */
    'number_of_laps' = undefined;
    /**
    * Elapsed race time in milliseconds
    * @member {Number} elapsed_time
    */
    'elapsed_time' = undefined;
    /**
    * Time of flag
    * @member {Date} time
    */
    'time' = undefined;
    /**
    * Duration in seconds
    * @member {Number} duration
    */
    'duration' = undefined;
    /**
    * Flag stage:  (NONE, WARMUP, GREEN, YELLOW, RED, WHITE, FINISH, EXTRA)
    * @member {String} flag_state
    */
    'flag_state' = undefined;
    /**
    * Comments
    * @member {String} comment
    */
    'comment' = undefined;




}
