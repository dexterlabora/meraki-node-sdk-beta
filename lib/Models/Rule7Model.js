/**
 * meraki
 *
 * This file was automatically generated for meraki by APIMATIC v2.0 ( https://apimatic.io ).
 */

'use strict';

const BaseModel = require('./BaseModel');

/**
 * Creates an instance of Rule7Model
 */
class Rule7Model extends BaseModel {
    /**
     * @constructor
     * @param   {Object}  obj    The object passed to constructor
     */
    constructor(obj) {
        super(obj);
        if (obj === undefined || obj === null) return;
        this.publicIp = this.constructor.getValue(obj.publicIp);
        this.uplink = this.constructor.getValue(obj.uplink);
        this.portRules = this.constructor.getValue(obj.portRules);
        this.name = this.constructor.getValue(obj.name);
        this.protocol = this.constructor.getValue(obj.protocol);
        this.publicPort = this.constructor.getValue(obj.publicPort);
        this.localIp = this.constructor.getValue(obj.localIp);
        this.localPort = this.constructor.getValue(obj.localPort);
        this.allowedIps = this.constructor.getValue(obj.allowedIps);
    }

    /**
     * Function containing information about the fields of this model
     * @return   {array}   Array of objects containing information about the fields
     */
    static mappingInfo() {
        return super.mappingInfo().concat([
            { name: 'publicIp', realName: 'publicIp' },
            { name: 'uplink', realName: 'uplink' },
            { name: 'portRules', realName: 'portRules', array: true },
            { name: 'name', realName: 'name' },
            { name: 'protocol', realName: 'protocol' },
            { name: 'publicPort', realName: 'publicPort' },
            { name: 'localIp', realName: 'localIp' },
            { name: 'localPort', realName: 'localPort' },
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

module.exports = Rule7Model;
