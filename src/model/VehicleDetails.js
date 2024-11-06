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
import RaceResultSummary from './RaceResultSummary.js';

/**
* The VehicleDetails model module.
* @module model/VehicleDetails
* @version 1.0
*/
export default class VehicleDetails {
    /**
    * Constructs a new <code>VehicleDetails</code>.
    * @alias module:model/VehicleDetails
    * @class
    */

    constructor() {
        
        
        
    }

    /**
    * Constructs a <code>VehicleDetails</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/VehicleDetails} obj Optional instance to populate.
    * @return {module:model/VehicleDetails} The populated <code>VehicleDetails</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new VehicleDetails();
                        
            
            if (data.hasOwnProperty('season')) {
                obj['season'] = ApiClient.convertToType(data['season'], 'Number');
            }
            if (data.hasOwnProperty('series_id')) {
                obj['series_id'] = ApiClient.convertToType(data['series_id'], 'Number');
            }
            if (data.hasOwnProperty('vehicle_number')) {
                obj['vehicle_number'] = ApiClient.convertToType(data['vehicle_number'], 'String');
            }
            if (data.hasOwnProperty('badge')) {
                obj['badge'] = ApiClient.convertToType(data['badge'], 'String');
            }
            if (data.hasOwnProperty('results')) {
                obj['results'] = ApiClient.convertToType(data['results'], [RaceResultSummary]);
            }
        }
        return obj;
    }

    /**
    * Race season
    * @member {Number} season
    */
    'season' = undefined;
    /**
    * Series
    * @member {Number} series_id
    */
    'series_id' = undefined;
    /**
    * Vehicle Number
    * @member {String} vehicle_number
    */
    'vehicle_number' = undefined;
    /**
    * URL to badge logo
    * @member {String} badge
    */
    'badge' = undefined;
    /**
    * Season race results
    * @member {Array.<module:model/RaceResultSummary>} results
    */
    'results' = undefined;




}
