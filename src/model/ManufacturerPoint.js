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
* The ManufacturerPoint model module.
* @module model/ManufacturerPoint
* @version 1.0
*/
export default class ManufacturerPoint {
    /**
    * Constructs a new <code>ManufacturerPoint</code>.
    * @alias module:model/ManufacturerPoint
    * @class
    */

    constructor() {
        
        
        
    }

    /**
    * Constructs a <code>ManufacturerPoint</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/ManufacturerPoint} obj Optional instance to populate.
    * @return {module:model/ManufacturerPoint} The populated <code>ManufacturerPoint</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ManufacturerPoint();
                        
            
            if (data.hasOwnProperty('position')) {
                obj['position'] = ApiClient.convertToType(data['position'], 'Number');
            }
            if (data.hasOwnProperty('manufacturer')) {
                obj['manufacturer'] = ApiClient.convertToType(data['manufacturer'], 'String');
            }
            if (data.hasOwnProperty('points')) {
                obj['points'] = ApiClient.convertToType(data['points'], 'Number');
            }
            if (data.hasOwnProperty('wins')) {
                obj['wins'] = ApiClient.convertToType(data['wins'], 'Number');
            }
            if (data.hasOwnProperty('best_finish')) {
                obj['best_finish'] = ApiClient.convertToType(data['best_finish'], 'Date');
            }
        }
        return obj;
    }

    /**
    * Points position
    * @member {Number} position
    */
    'position' = undefined;
    /**
    * Manufacturer name
    * @member {String} manufacturer
    */
    'manufacturer' = undefined;
    /**
    * Number of points earned
    * @member {Number} points
    */
    'points' = undefined;
    /**
    * Total wins in season
    * @member {Number} wins
    */
    'wins' = undefined;
    /**
    * Best finish date
    * @member {Date} best_finish
    */
    'best_finish' = undefined;




}
