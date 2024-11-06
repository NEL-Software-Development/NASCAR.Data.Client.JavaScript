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
* The StageResult model module.
* @module model/StageResult
* @version 1.0
*/
export default class StageResult {
    /**
    * Constructs a new <code>StageResult</code>.
    * @alias module:model/StageResult
    * @class
    */

    constructor() {
        
        
        
    }

    /**
    * Constructs a <code>StageResult</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/StageResult} obj Optional instance to populate.
    * @return {module:model/StageResult} The populated <code>StageResult</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new StageResult();
                        
            
            if (data.hasOwnProperty('finish_position')) {
                obj['finish_position'] = ApiClient.convertToType(data['finish_position'], 'Number');
            }
            if (data.hasOwnProperty('driver_name')) {
                obj['driver_name'] = ApiClient.convertToType(data['driver_name'], 'String');
            }
            if (data.hasOwnProperty('vehicle_number')) {
                obj['vehicle_number'] = ApiClient.convertToType(data['vehicle_number'], 'String');
            }
        }
        return obj;
    }

    /**
    * Finish position in stage
    * @member {Number} finish_position
    */
    'finish_position' = undefined;
    /**
    * Driver name
    * @member {String} driver_name
    */
    'driver_name' = undefined;
    /**
    * Vehicle number
    * @member {String} vehicle_number
    */
    'vehicle_number' = undefined;




}
