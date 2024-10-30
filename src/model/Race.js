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
* The Race model module.
* @module model/Race
* @version 1.0
*/
export default class Race {
    /**
    * Constructs a new <code>Race</code>.
    * @alias module:model/Race
    * @class
    */

    constructor() {
        
        
        
    }

    /**
    * Constructs a <code>Race</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/Race} obj Optional instance to populate.
    * @return {module:model/Race} The populated <code>Race</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Race();
                        
            
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('principal_race_id')) {
                obj['principal_race_id'] = ApiClient.convertToType(data['principal_race_id'], 'Number');
            }
            if (data.hasOwnProperty('raceweek_id')) {
                obj['raceweek_id'] = ApiClient.convertToType(data['raceweek_id'], 'Number');
            }
            if (data.hasOwnProperty('series_id')) {
                obj['series_id'] = ApiClient.convertToType(data['series_id'], 'Number');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('promoter')) {
                obj['promoter'] = ApiClient.convertToType(data['promoter'], 'String');
            }
            if (data.hasOwnProperty('laps')) {
                obj['laps'] = ApiClient.convertToType(data['laps'], 'Number');
            }
            if (data.hasOwnProperty('distance')) {
                obj['distance'] = ApiClient.convertToType(data['distance'], 'Number');
            }
            if (data.hasOwnProperty('practice_results')) {
                obj['practice_results'] = ApiClient.convertToType(data['practice_results'], 'String');
            }
            if (data.hasOwnProperty('qualifying_results')) {
                obj['qualifying_results'] = ApiClient.convertToType(data['qualifying_results'], 'String');
            }
            if (data.hasOwnProperty('race_results')) {
                obj['race_results'] = ApiClient.convertToType(data['race_results'], 'String');
            }
            if (data.hasOwnProperty('cautions')) {
                obj['cautions'] = ApiClient.convertToType(data['cautions'], 'String');
            }
            if (data.hasOwnProperty('infractions')) {
                obj['infractions'] = ApiClient.convertToType(data['infractions'], 'String');
            }
            if (data.hasOwnProperty('lap_leaders')) {
                obj['lap_leaders'] = ApiClient.convertToType(data['lap_leaders'], 'String');
            }
            if (data.hasOwnProperty('pitstops')) {
                obj['pitstops'] = ApiClient.convertToType(data['pitstops'], 'String');
            }
            if (data.hasOwnProperty('date')) {
                obj['date'] = ApiClient.convertToType(data['date'], 'Date');
            }
            if (data.hasOwnProperty('comments')) {
                obj['comments'] = ApiClient.convertToType(data['comments'], 'String');
            }
        }
        return obj;
    }

    /**
    * The id of the race
    * @member {Number} id
    */
    'id' = undefined;
    /**
    * The principal race id of the race
    * @member {Number} principal_race_id
    */
    'principal_race_id' = undefined;
    /**
    * The race
    * @member {Number} raceweek_id
    */
    'raceweek_id' = undefined;
    /**
    * The series id of the race
    * @member {Number} series_id
    */
    'series_id' = undefined;
    /**
    * The race name
    * @member {String} name
    */
    'name' = undefined;
    /**
    * The promoter of the race
    * @member {String} promoter
    */
    'promoter' = undefined;
    /**
    * Laps
    * @member {Number} laps
    */
    'laps' = undefined;
    /**
    * Race distance
    * @member {Number} distance
    */
    'distance' = undefined;
    /**
    * URL to practice results
    * @member {String} practice_results
    */
    'practice_results' = undefined;
    /**
    * URL to Qualifying results
    * @member {String} qualifying_results
    */
    'qualifying_results' = undefined;
    /**
    * URL to race results
    * @member {String} race_results
    */
    'race_results' = undefined;
    /**
    * URL to race cautions
    * @member {String} cautions
    */
    'cautions' = undefined;
    /**
    * URL to race infractions
    * @member {String} infractions
    */
    'infractions' = undefined;
    /**
    * URL to race lap leaders
    * @member {String} lap_leaders
    */
    'lap_leaders' = undefined;
    /**
    * URL to race pitstops
    * @member {String} pitstops
    */
    'pitstops' = undefined;
    /**
    * Race date
    * @member {Date} date
    */
    'date' = undefined;
    /**
    * Race comments
    * @member {String} comments
    */
    'comments' = undefined;




}
