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
import RaceDetails from './RaceDetails.js';

/**
* The RaceWeekDetails model module.
* @module model/RaceWeekDetails
* @version 1.0
*/
export default class RaceWeekDetails {
    /**
    * Constructs a new <code>RaceWeekDetails</code>.
    * @alias module:model/RaceWeekDetails
    * @class
    */

    constructor() {
        
        
        
    }

    /**
    * Constructs a <code>RaceWeekDetails</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/RaceWeekDetails} obj Optional instance to populate.
    * @return {module:model/RaceWeekDetails} The populated <code>RaceWeekDetails</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RaceWeekDetails();
                        
            
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('races')) {
                obj['races'] = ApiClient.convertToType(data['races'], [RaceDetails]);
            }
        }
        return obj;
    }

    /**
    * Raceweek Id
    * @member {Number} id
    */
    'id' = undefined;
    /**
    * Raceweek race list
    * @member {Array.<module:model/RaceDetails>} races
    */
    'races' = undefined;




}
