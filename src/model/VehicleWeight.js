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
* The VehicleWeight model module.
* @module model/VehicleWeight
* @version 1.0
*/
export default class VehicleWeight {
    /**
    * Constructs a new <code>VehicleWeight</code>.
    * @alias module:model/VehicleWeight
    * @class
    */

    constructor() {
        
        
        
    }

    /**
    * Constructs a <code>VehicleWeight</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/VehicleWeight} obj Optional instance to populate.
    * @return {module:model/VehicleWeight} The populated <code>VehicleWeight</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new VehicleWeight();
                        
            
            if (data.hasOwnProperty('inspection_type')) {
                obj['inspection_type'] = ApiClient.convertToType(data['inspection_type'], 'String');
            }
            if (data.hasOwnProperty('vehicle_number')) {
                obj['vehicle_number'] = ApiClient.convertToType(data['vehicle_number'], 'String');
            }
            if (data.hasOwnProperty('adjustment')) {
                obj['adjustment'] = ApiClient.convertToType(data['adjustment'], 'Number');
            }
            if (data.hasOwnProperty('cross_weight')) {
                obj['cross_weight'] = ApiClient.convertToType(data['cross_weight'], 'Number');
            }
            if (data.hasOwnProperty('left_front')) {
                obj['left_front'] = ApiClient.convertToType(data['left_front'], 'Number');
            }
            if (data.hasOwnProperty('left_rear')) {
                obj['left_rear'] = ApiClient.convertToType(data['left_rear'], 'Number');
            }
            if (data.hasOwnProperty('left_side')) {
                obj['left_side'] = ApiClient.convertToType(data['left_side'], 'Number');
            }
            if (data.hasOwnProperty('nose')) {
                obj['nose'] = ApiClient.convertToType(data['nose'], 'Number');
            }
            if (data.hasOwnProperty('rear')) {
                obj['rear'] = ApiClient.convertToType(data['rear'], 'Number');
            }
            if (data.hasOwnProperty('right_front')) {
                obj['right_front'] = ApiClient.convertToType(data['right_front'], 'Number');
            }
            if (data.hasOwnProperty('right_rear')) {
                obj['right_rear'] = ApiClient.convertToType(data['right_rear'], 'Number');
            }
            if (data.hasOwnProperty('right_side')) {
                obj['right_side'] = ApiClient.convertToType(data['right_side'], 'Number');
            }
            if (data.hasOwnProperty('total_weight')) {
                obj['total_weight'] = ApiClient.convertToType(data['total_weight'], 'Number');
            }
            if (data.hasOwnProperty('passed')) {
                obj['passed'] = ApiClient.convertToType(data['passed'], 'Boolean');
            }
        }
        return obj;
    }

    /**
    * The type of inspection
    * @member {String} inspection_type
    */
    'inspection_type' = undefined;
    /**
    * The vehicle number inspected
    * @member {String} vehicle_number
    */
    'vehicle_number' = undefined;
    /**
    * The weight adjustment
    * @member {Number} adjustment
    */
    'adjustment' = undefined;
    /**
    * The cross weight of the vehicle
    * @member {Number} cross_weight
    */
    'cross_weight' = undefined;
    /**
    * The left front weight of the vehicle
    * @member {Number} left_front
    */
    'left_front' = undefined;
    /**
    * The left rear weight of the vehicle
    * @member {Number} left_rear
    */
    'left_rear' = undefined;
    /**
    * The weight of the left side of the vehicle
    * @member {Number} left_side
    */
    'left_side' = undefined;
    /**
    * The nose weight of the vehicle
    * @member {Number} nose
    */
    'nose' = undefined;
    /**
    * The rear weight of the vehicle
    * @member {Number} rear
    */
    'rear' = undefined;
    /**
    * The right front weight of the vehicle
    * @member {Number} right_front
    */
    'right_front' = undefined;
    /**
    * The right rear weight of the vehicle
    * @member {Number} right_rear
    */
    'right_rear' = undefined;
    /**
    * The weight of the right side of the vehicle
    * @member {Number} right_side
    */
    'right_side' = undefined;
    /**
    * The total weight of the vehicle
    * @member {Number} total_weight
    */
    'total_weight' = undefined;
    /**
    * Whether or not is passed
    * @member {Boolean} passed
    */
    'passed' = undefined;




}
