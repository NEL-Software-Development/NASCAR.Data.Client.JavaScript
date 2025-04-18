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
* The DriverSummaryByPrincipalRaceID model module.
* @module model/DriverSummaryByPrincipalRaceID
* @version 1.0
*/
export default class DriverSummaryByPrincipalRaceID {
    /**
    * Constructs a new <code>DriverSummaryByPrincipalRaceID</code>.
    * @alias module:model/DriverSummaryByPrincipalRaceID
    * @class
    */

    constructor() {
        
        
        
    }

    /**
    * Constructs a <code>DriverSummaryByPrincipalRaceID</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/DriverSummaryByPrincipalRaceID} obj Optional instance to populate.
    * @return {module:model/DriverSummaryByPrincipalRaceID} The populated <code>DriverSummaryByPrincipalRaceID</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DriverSummaryByPrincipalRaceID();
                        
            
            if (data.hasOwnProperty('average_start')) {
                obj['average_start'] = ApiClient.convertToType(data['average_start'], 'Number');
            }
            if (data.hasOwnProperty('average_finish')) {
                obj['average_finish'] = ApiClient.convertToType(data['average_finish'], 'Number');
            }
            if (data.hasOwnProperty('dnf')) {
                obj['dnf'] = ApiClient.convertToType(data['dnf'], 'Number');
            }
            if (data.hasOwnProperty('driver_id')) {
                obj['driver_id'] = ApiClient.convertToType(data['driver_id'], 'Number');
            }
            if (data.hasOwnProperty('laps_completed')) {
                obj['laps_completed'] = ApiClient.convertToType(data['laps_completed'], 'Number');
            }
            if (data.hasOwnProperty('laps_led')) {
                obj['laps_led'] = ApiClient.convertToType(data['laps_led'], 'Number');
            }
            if (data.hasOwnProperty('lead_lap_finish')) {
                obj['lead_lap_finish'] = ApiClient.convertToType(data['lead_lap_finish'], 'Number');
            }
            if (data.hasOwnProperty('miles_completed')) {
                obj['miles_completed'] = ApiClient.convertToType(data['miles_completed'], 'Number');
            }
            if (data.hasOwnProperty('poles')) {
                obj['poles'] = ApiClient.convertToType(data['poles'], 'Number');
            }
            if (data.hasOwnProperty('running_at_finish')) {
                obj['running_at_finish'] = ApiClient.convertToType(data['running_at_finish'], 'Number');
            }
            if (data.hasOwnProperty('series_id')) {
                obj['series_id'] = ApiClient.convertToType(data['series_id'], 'Number');
            }
            if (data.hasOwnProperty('top5')) {
                obj['top5'] = ApiClient.convertToType(data['top5'], 'Number');
            }
            if (data.hasOwnProperty('top10')) {
                obj['top10'] = ApiClient.convertToType(data['top10'], 'Number');
            }
            if (data.hasOwnProperty('total_races')) {
                obj['total_races'] = ApiClient.convertToType(data['total_races'], 'Number');
            }
            if (data.hasOwnProperty('wins')) {
                obj['wins'] = ApiClient.convertToType(data['wins'], 'Number');
            }
            if (data.hasOwnProperty('principal_race_id')) {
                obj['principal_race_id'] = ApiClient.convertToType(data['principal_race_id'], 'Number');
            }
            if (data.hasOwnProperty('race_name')) {
                obj['race_name'] = ApiClient.convertToType(data['race_name'], 'String');
            }
            if (data.hasOwnProperty('race_date')) {
                obj['race_date'] = ApiClient.convertToType(data['race_date'], 'Date');
            }
            if (data.hasOwnProperty('season')) {
                obj['season'] = ApiClient.convertToType(data['season'], 'Number');
            }
        }
        return obj;
    }

    /**
    * Average start position
    * @member {Number} average_start
    */
    'average_start' = undefined;
    /**
    * Average finish position
    * @member {Number} average_finish
    */
    'average_finish' = undefined;
    /**
    * The number of races where the driver did not finish
    * @member {Number} dnf
    */
    'dnf' = undefined;
    /**
    * Driver Id
    * @member {Number} driver_id
    */
    'driver_id' = undefined;
    /**
    * The number of laps completed
    * @member {Number} laps_completed
    */
    'laps_completed' = undefined;
    /**
    * The number of laps led
    * @member {Number} laps_led
    */
    'laps_led' = undefined;
    /**
    * The number of finishes where the driver was on the lead lap
    * @member {Number} lead_lap_finish
    */
    'lead_lap_finish' = undefined;
    /**
    * Total miles completed
    * @member {Number} miles_completed
    */
    'miles_completed' = undefined;
    /**
    * The number of times the driver earned the pole position
    * @member {Number} poles
    */
    'poles' = undefined;
    /**
    * Running at finish
    * @member {Number} running_at_finish
    */
    'running_at_finish' = undefined;
    /**
    * Series ID
    * @member {Number} series_id
    */
    'series_id' = undefined;
    /**
    * The number of top 5 finishes
    * @member {Number} top5
    */
    'top5' = undefined;
    /**
    * The number of top 10 finishes
    * @member {Number} top10
    */
    'top10' = undefined;
    /**
    * The total number of races
    * @member {Number} total_races
    */
    'total_races' = undefined;
    /**
    * Race wins
    * @member {Number} wins
    */
    'wins' = undefined;
    /**
    * Principal race id
    * @member {Number} principal_race_id
    */
    'principal_race_id' = undefined;
    /**
    * Race name
    * @member {String} race_name
    */
    'race_name' = undefined;
    /**
    * Race date
    * @member {Date} race_date
    */
    'race_date' = undefined;
    /**
    * Race season
    * @member {Number} season
    */
    'season' = undefined;




}
