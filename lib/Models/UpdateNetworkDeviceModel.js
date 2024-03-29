/**
 * meraki
 *
 * This file was automatically generated for meraki by APIMATIC v2.0 ( https://apimatic.io ).
 */

'use strict';

const BaseModel = require('./BaseModel');

/**
 * Creates an instance of UpdateNetworkDeviceModel
 */
class UpdateNetworkDeviceModel extends BaseModel {
    /**
     * @constructor
     * @param   {Object}  obj    The object passed to constructor
     */
    constructor(obj) {
        super(obj);
        if (obj === undefined || obj === null) return;
        this.name = this.constructor.getValue(obj.name);
        this.tags = this.constructor.getValue(obj.tags);
        this.lat = this.constructor.getValue(obj.lat);
        this.lng = this.constructor.getValue(obj.lng);
        this.address = this.constructor.getValue(obj.address);
        this.notes = this.constructor.getValue(obj.notes);
        this.moveMapMarker = this.constructor.getValue(obj.moveMapMarker);
    }

    /**
     * Function containing information about the fields of this model
     * @return   {array}   Array of objects containing information about the fields
     */
    static mappingInfo() {
        return super.mappingInfo().concat([
            { name: 'name', realName: 'name' },
            { name: 'tags', realName: 'tags' },
            { name: 'lat', realName: 'lat' },
            { name: 'lng', realName: 'lng' },
            { name: 'address', realName: 'address' },
            { name: 'notes', realName: 'notes' },
            { name: 'moveMapMarker', realName: 'moveMapMarker' },
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

module.exports = UpdateNetworkDeviceModel;
