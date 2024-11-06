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
* The Caution model module.
* @module model/Caution
* @version 1.0
*/
export default class Caution {
    /**
    * Constructs a new <code>Caution</code>.
    * @alias module:model/Caution
    * @class
    */

    constructor() {
        
        
        
    }

    /**
    * Constructs a <code>Caution</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/Caution} obj Optional instance to populate.
    * @return {module:model/Caution} The populated <code>Caution</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Caution();
                        
            
            if (data.hasOwnProperty('lap_start')) {
                obj['lap_start'] = ApiClient.convertToType(data['lap_start'], 'Number');
            }
            if (data.hasOwnProperty('lap_end')) {
                obj['lap_end'] = ApiClient.convertToType(data['lap_end'], 'Number');
            }
            if (data.hasOwnProperty('beneficiary')) {
                obj['beneficiary'] = ApiClient.convertToType(data['beneficiary'], 'String');
            }
            if (data.hasOwnProperty('comment')) {
                obj['comment'] = ApiClient.convertToType(data['comment'], 'String');
            }
            if (data.hasOwnProperty('reason')) {
                obj['reason'] = ApiClient.convertToType(data['reason'], 'String');
            }
            if (data.hasOwnProperty('flag_time')) {
                obj['flag_time'] = ApiClient.convertToType(data['flag_time'], 'Date');
            }
        }
        return obj;
    }

    /**
    * The first lap of the caution
    * @member {Number} lap_start
    */
    'lap_start' = undefined;
    /**
    * The last lap of the caution
    * @member {Number} lap_end
    */
    'lap_end' = undefined;
    /**
    * The lap down vehicle put back on the lead lap
    * @member {String} beneficiary
    */
    'beneficiary' = undefined;
    /**
    * Comments about the caution
    * @member {String} comment
    */
    'comment' = undefined;
    /**
    * The reason the caution was thrown
    * @member {String} reason
    */
    'reason' = undefined;
    /**
    * The time the caution was thrown
    * @member {Date} flag_time
    */
    'flag_time' = undefined;




}
