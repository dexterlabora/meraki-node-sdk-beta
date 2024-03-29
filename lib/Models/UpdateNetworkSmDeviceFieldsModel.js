/**
 * meraki
 *
 * This file was automatically generated for meraki by APIMATIC v2.0 ( https://apimatic.io ).
 */

'use strict';

const BaseModel = require('./BaseModel');

/**
 * Creates an instance of UpdateNetworkSmDeviceFieldsModel
 */
class UpdateNetworkSmDeviceFieldsModel extends BaseModel {
    /**
     * @constructor
     * @param   {Object}  obj    The object passed to constructor
     */
    constructor(obj) {
        super(obj);
        if (obj === undefined || obj === null) return;
        this.wifiMac = this.constructor.getValue(obj.wifiMac);
        this.id = this.constructor.getValue(obj.id);
        this.serial = this.constructor.getValue(obj.serial);
        this.deviceFields = this.constructor.getValue(obj.deviceFields);
    }

    /**
     * Function containing information about the fields of this model
     * @return   {array}   Array of objects containing information about the fields
     */
    static mappingInfo() {
        return super.mappingInfo().concat([
            { name: 'wifiMac', realName: 'wifiMac' },
            { name: 'id', realName: 'id' },
            { name: 'serial', realName: 'serial' },
            { name: 'deviceFields', realName: 'deviceFields' },
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

module.exports = UpdateNetworkSmDeviceFieldsModel;
