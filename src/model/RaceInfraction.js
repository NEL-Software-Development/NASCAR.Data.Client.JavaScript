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
* The RaceInfraction model module.
* @module model/RaceInfraction
* @version 1.0
*/
export default class RaceInfraction {
    /**
    * Constructs a new <code>RaceInfraction</code>.
    * @alias module:model/RaceInfraction
    * @class
    */

    constructor() {
        
        
        
    }

    /**
    * Constructs a <code>RaceInfraction</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/RaceInfraction} obj Optional instance to populate.
    * @return {module:model/RaceInfraction} The populated <code>RaceInfraction</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RaceInfraction();
                        
            
            if (data.hasOwnProperty('flag_state')) {
                obj['flag_state'] = ApiClient.convertToType(data['flag_state'], 'String');
            }
            if (data.hasOwnProperty('infraction')) {
                obj['infraction'] = ApiClient.convertToType(data['infraction'], 'String');
            }
            if (data.hasOwnProperty('vehicle_number')) {
                obj['vehicle_number'] = ApiClient.convertToType(data['vehicle_number'], 'String');
            }
            if (data.hasOwnProperty('lap')) {
                obj['lap'] = ApiClient.convertToType(data['lap'], 'Number');
            }
            if (data.hasOwnProperty('lap_assessed')) {
                obj['lap_assessed'] = ApiClient.convertToType(data['lap_assessed'], 'Number');
            }
            if (data.hasOwnProperty('time_of_race')) {
                obj['time_of_race'] = ApiClient.convertToType(data['time_of_race'], 'Date');
            }
            if (data.hasOwnProperty('penalty')) {
                obj['penalty'] = ApiClient.convertToType(data['penalty'], 'String');
            }
            if (data.hasOwnProperty('notes')) {
                obj['notes'] = ApiClient.convertToType(data['notes'], 'String');
            }
        }
        return obj;
    }

    /**
    * Flag state at the time of the infraction: (W,G,G/Y,R,Y)
    * @member {String} flag_state
    */
    'flag_state' = undefined;
    /**
    * Description of the infraction
    * @member {String} infraction
    */
    'infraction' = undefined;
    /**
    * Vehicle number
    * @member {String} vehicle_number
    */
    'vehicle_number' = undefined;
    /**
    * Lap of infraction
    * @member {Number} lap
    */
    'lap' = undefined;
    /**
    * Lap infraction was assessed
    * @member {Number} lap_assessed
    */
    'lap_assessed' = undefined;
    /**
    * Time of race the infraction occurred
    * @member {Date} time_of_race
    */
    'time_of_race' = undefined;
    /**
    * Penalty assessed
    * @member {String} penalty
    */
    'penalty' = undefined;
    /**
    * Notes
    * @member {String} notes
    */
    'notes' = undefined;




}
