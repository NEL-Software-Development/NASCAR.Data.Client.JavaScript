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
* Enum class RunState.
* @enum {}
* @readonly
*/
export default class RunState {
        /**
         * value: "Inactive"
         * @const
         */
        Inactive = "Inactive";

        /**
         * value: "Active"
         * @const
         */
        Active = "Active";

        /**
         * value: "Completed"
         * @const
         */
        Completed = "Completed";


    /**
    * Returns a <code>RunState</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/RunState} The enum <code>RunState</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}
