/**
 * meraki
 *
 * This file was automatically generated for meraki by APIMATIC v2.0 ( https://apimatic.io ).
 */

'use strict';

const BaseModel = require('./BaseModel');

/**
 * Creates an instance of CreateNetworkSmTagModel
 */
class CreateNetworkSmTagModel extends BaseModel {
    /**
     * @constructor
     * @param   {Object}  obj    The object passed to constructor
     */
    constructor(obj) {
        super(obj);
        if (obj === undefined || obj === null) return;
        this.type = this.constructor.getValue(obj.type);
        this.name = this.constructor.getValue(obj.name);
        this.associatedId = this.constructor.getValue(obj.associatedId);
        this.scope = this.constructor.getValue(obj.scope);
    }

    /**
     * Function containing information about the fields of this model
     * @return   {array}   Array of objects containing information about the fields
     */
    static mappingInfo() {
        return super.mappingInfo().concat([
            { name: 'type', realName: 'type' },
            { name: 'name', realName: 'name' },
            { name: 'associatedId', realName: 'associatedId' },
            { name: 'scope', realName: 'scope' },
        ]);
    }

    /**
     * Function containing information about discriminator values
     * mapped with their corresponding model class names
     *
     * @return   {object}  Object containing Key-Value pairs mapping discriminator
     *                     values with their corresponding model classes
     */
    static discriminatorMap() {
        return {};
    }
}

module.exports = CreateNetworkSmTagModel;
