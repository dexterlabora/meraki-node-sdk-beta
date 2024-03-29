/**
 * meraki
 *
 * This file was automatically generated for meraki by APIMATIC v2.0 ( https://apimatic.io ).
 */

'use strict';

const BaseModel = require('./BaseModel');

/**
 * Creates an instance of Rule8Model
 */
class Rule8Model extends BaseModel {
    /**
     * @constructor
     * @param   {Object}  obj    The object passed to constructor
     */
    constructor(obj) {
        super(obj);
        if (obj === undefined || obj === null) return;
        this.name = this.constructor.getValue(obj.name);
        this.publicIp = this.constructor.getValue(obj.publicIp);
        this.lanIp = this.constructor.getValue(obj.lanIp);
        this.uplink = this.constructor.getValue(obj.uplink);
        this.allowedInbound = this.constructor.getValue(obj.allowedInbound);
        this.protocol = this.constructor.getValue(obj.protocol);
        this.destinationPorts = this.constructor.getValue(obj.destinationPorts);
        this.allowedIps = this.constructor.getValue(obj.allowedIps);
    }

    /**
     * Function containing information about the fields of this model
     * @return   {array}   Array of objects containing information about the fields
     */
    static mappingInfo() {
        return super.mappingInfo().concat([
            { name: 'name', realName: 'name' },
            { name: 'publicIp', realName: 'publicIp' },
            { name: 'lanIp', realName: 'lanIp' },
            { name: 'uplink', realName: 'uplink' },
            { name: 'allowedInbound', realName: 'allowedInbound', array: true },
            { name: 'protocol', realName: 'protocol' },
            { name: 'destinationPorts', realName: 'destinationPorts' },
            { name: 'allowedIps', realName: 'allowedIps' },
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

module.exports = Rule8Model;
