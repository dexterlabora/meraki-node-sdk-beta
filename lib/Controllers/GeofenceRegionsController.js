/**
 * meraki
 *
 * This file was automatically generated for meraki by APIMATIC v2.0 ( https://apimatic.io ).
 */

'use strict';

const _request = require('../Http/Client/RequestClient');
const _configuration = require('../configuration');
const _apiHelper = require('../APIHelper');
const _baseController = require('./BaseController');

class GeofenceRegionsController {
    /**
     * List the geofence's regions associated with the specified geofence
     *
     * @param  {array}  input    Array with all options for search
     * @param {string} input['networkId'] TODO: type description here
     * @param {string} input['geofenceId'] TODO: type description here
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static getNetworkSmGeofenceRegions(input, callback) {
        // create empty callback if absent
        const _callback = typeof callback === 'function' ? callback : () => undefined;

        // validating required parameters
        if (input.networkId === null || input.networkId === undefined) {
            const _err = { errorMessage: 'The property `networkId` in the input object cannot be null.',
                errorCode: -1 };
            _callback(_err, null, null);
            return Promise.reject(_err);
        } else if (input.geofenceId === null || input.geofenceId === undefined) {
            const _err = { errorMessage: 'The property `geofenceId` in the input object cannot be null.',
                errorCode: -1 };
            _callback(_err, null, null);
            return Promise.reject(_err);
        }
        // prepare query string for API call
        const _baseUri = _configuration.BASEURI;

        let _pathUrl = '/networks/{networkId}/sm/geofences/{geofenceId}/regions';
        // process template parameters
        _pathUrl = _apiHelper.appendUrlWithTemplateParameters(_pathUrl, {
            networkId: input.networkId,
            geofenceId: input.geofenceId,
        });

        const _queryBuilder = `${_baseUri}${_pathUrl}`;

        // validate and preprocess url
        const _queryUrl = _apiHelper.cleanUrl(_queryBuilder);

        // prepare headers
        const _headers = {
            accept: 'application/json',
            'X-Cisco-Meraki-API-Key': _configuration.xCiscoMerakiAPIKey,
        };

        // construct the request
        const _options = {
            queryUrl: _queryUrl,
            method: 'GET',
            headers: _headers,
        };

        // build the response processing.
        return new Promise((_fulfill, _reject) => {
            _request(_options, (_error, _response, _context) => {
                let errorResponse;
                if (_error) {
                    errorResponse = _baseController.validateResponse(_context);
                    _callback(errorResponse.error, errorResponse.response, errorResponse.context);
                    _reject(errorResponse.error);
                } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
                    const parsed = JSON.parse(_response.body);
                    _callback(null, parsed, _context);
                    _fulfill(parsed);
                } else {
                    errorResponse = _baseController.validateResponse(_context);
                    _callback(errorResponse.error, errorResponse.response, errorResponse.context);
                    _reject(errorResponse.error);
                }
            });
        });
    }
    /**
     * Add a new geofence region to the specified geofence
     *
     * @param  {array}  input    Array with all options for search
     * @param {string} input['networkId'] TODO: type description here
     * @param {string} input['geofenceId'] TODO: type description here
     * @param {CreateNetworkSmGeofenceRegionModel} input['createNetworkSmGeofenceRegion'] (optional
     * ) TODO:
     * type
     * descripti
     * on here
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static createNetworkSmGeofenceRegion(input, callback) {
        // create empty callback if absent
        const _callback = typeof callback === 'function' ? callback : () => undefined;

        // validating required parameters
        if (input.networkId === null || input.networkId === undefined) {
            const _err = { errorMessage: 'The property `networkId` in the input object cannot be null.',
                errorCode: -1 };
            _callback(_err, null, null);
            return Promise.reject(_err);
        } else if (input.geofenceId === null || input.geofenceId === undefined) {
            const _err = { errorMessage: 'The property `geofenceId` in the input object cannot be null.',
                errorCode: -1 };
            _callback(_err, null, null);
            return Promise.reject(_err);
        }
        // prepare query string for API call
        const _baseUri = _configuration.BASEURI;

        let _pathUrl = '/networks/{networkId}/sm/geofences/{geofenceId}/regions';
        // process template parameters
        _pathUrl = _apiHelper.appendUrlWithTemplateParameters(_pathUrl, {
            networkId: input.networkId,
            geofenceId: input.geofenceId,
        });

        const _queryBuilder = `${_baseUri}${_pathUrl}`;

        // validate and preprocess url
        const _queryUrl = _apiHelper.cleanUrl(_queryBuilder);

        // prepare headers
        const _headers = {
            accept: 'application/json',
            'content-type': 'application/json; charset=utf-8',
            'X-Cisco-Meraki-API-Key': _configuration.xCiscoMerakiAPIKey,
        };

        // construct the request
        const _options = {
            queryUrl: _queryUrl,
            method: 'POST',
            headers: _headers,
            body: _apiHelper.jsonSerialize(input.createNetworkSmGeofenceRegion),
        };

        // build the response processing.
        return new Promise((_fulfill, _reject) => {
            _request(_options, (_error, _response, _context) => {
                let errorResponse;
                if (_error) {
                    errorResponse = _baseController.validateResponse(_context);
                    _callback(errorResponse.error, errorResponse.response, errorResponse.context);
                    _reject(errorResponse.error);
                } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
                    const parsed = JSON.parse(_response.body);
                    _callback(null, parsed, _context);
                    _fulfill(parsed);
                } else {
                    errorResponse = _baseController.validateResponse(_context);
                    _callback(errorResponse.error, errorResponse.response, errorResponse.context);
                    _reject(errorResponse.error);
                }
            });
        });
    }
    /**
     * Show the specified geofence region
     *
     * @param  {array}  input    Array with all options for search
     * @param {string} input['networkId'] TODO: type description here
     * @param {string} input['geofenceId'] TODO: type description here
     * @param {string} input['regionId'] TODO: type description here
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static getNetworkSmGeofenceRegion(input, callback) {
        // create empty callback if absent
        const _callback = typeof callback === 'function' ? callback : () => undefined;

        // validating required parameters
        if (input.networkId === null || input.networkId === undefined) {
            const _err = { errorMessage: 'The property `networkId` in the input object cannot be null.',
                errorCode: -1 };
            _callback(_err, null, null);
            return Promise.reject(_err);
        } else if (input.geofenceId === null || input.geofenceId === undefined) {
            const _err = { errorMessage: 'The property `geofenceId` in the input object cannot be null.',
                errorCode: -1 };
            _callback(_err, null, null);
            return Promise.reject(_err);
        } else if (input.regionId === null || input.regionId === undefined) {
            const _err = { errorMessage: 'The property `regionId` in the input object cannot be null.',
                errorCode: -1 };
            _callback(_err, null, null);
            return Promise.reject(_err);
        }
        // prepare query string for API call
        const _baseUri = _configuration.BASEURI;

        let _pathUrl = '/networks/{networkId}/sm/geofences/{geofenceId}/regions/{regionId}';
        // process template parameters
        _pathUrl = _apiHelper.appendUrlWithTemplateParameters(_pathUrl, {
            networkId: input.networkId,
            geofenceId: input.geofenceId,
            regionId: input.regionId,
        });

        const _queryBuilder = `${_baseUri}${_pathUrl}`;

        // validate and preprocess url
        const _queryUrl = _apiHelper.cleanUrl(_queryBuilder);

        // prepare headers
        const _headers = {
            accept: 'application/json',
            'X-Cisco-Meraki-API-Key': _configuration.xCiscoMerakiAPIKey,
        };

        // construct the request
        const _options = {
            queryUrl: _queryUrl,
            method: 'GET',
            headers: _headers,
        };

        // build the response processing.
        return new Promise((_fulfill, _reject) => {
            _request(_options, (_error, _response, _context) => {
                let errorResponse;
                if (_error) {
                    errorResponse = _baseController.validateResponse(_context);
                    _callback(errorResponse.error, errorResponse.response, errorResponse.context);
                    _reject(errorResponse.error);
                } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
                    const parsed = JSON.parse(_response.body);
                    _callback(null, parsed, _context);
                    _fulfill(parsed);
                } else {
                    errorResponse = _baseController.validateResponse(_context);
                    _callback(errorResponse.error, errorResponse.response, errorResponse.context);
                    _reject(errorResponse.error);
                }
            });
        });
    }
    /**
     * Update a specified geofence region
     *
     * @param  {array}  input    Array with all options for search
     * @param {string} input['networkId'] TODO: type description here
     * @param {string} input['geofenceId'] TODO: type description here
     * @param {string} input['regionId'] TODO: type description here
     * @param {UpdateNetworkSmGeofenceRegionModel} input['updateNetworkSmGeofenceRegion'] (optional
     * ) TODO:
     * type
     * descripti
     * on here
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static updateNetworkSmGeofenceRegion(input, callback) {
        // create empty callback if absent
        const _callback = typeof callback === 'function' ? callback : () => undefined;

        // validating required parameters
        if (input.networkId === null || input.networkId === undefined) {
            const _err = { errorMessage: 'The property `networkId` in the input object cannot be null.',
                errorCode: -1 };
            _callback(_err, null, null);
            return Promise.reject(_err);
        } else if (input.geofenceId === null || input.geofenceId === undefined) {
            const _err = { errorMessage: 'The property `geofenceId` in the input object cannot be null.',
                errorCode: -1 };
            _callback(_err, null, null);
            return Promise.reject(_err);
        } else if (input.regionId === null || input.regionId === undefined) {
            const _err = { errorMessage: 'The property `regionId` in the input object cannot be null.',
                errorCode: -1 };
            _callback(_err, null, null);
            return Promise.reject(_err);
        }
        // prepare query string for API call
        const _baseUri = _configuration.BASEURI;

        let _pathUrl = '/networks/{networkId}/sm/geofences/{geofenceId}/regions/{regionId}';
        // process template parameters
        _pathUrl = _apiHelper.appendUrlWithTemplateParameters(_pathUrl, {
            networkId: input.networkId,
            geofenceId: input.geofenceId,
            regionId: input.regionId,
        });

        const _queryBuilder = `${_baseUri}${_pathUrl}`;

        // validate and preprocess url
        const _queryUrl = _apiHelper.cleanUrl(_queryBuilder);

        // prepare headers
        const _headers = {
            accept: 'application/json',
            'content-type': 'application/json; charset=utf-8',
            'X-Cisco-Meraki-API-Key': _configuration.xCiscoMerakiAPIKey,
        };

        // construct the request
        const _options = {
            queryUrl: _queryUrl,
            method: 'PUT',
            headers: _headers,
            body: _apiHelper.jsonSerialize(input.updateNetworkSmGeofenceRegion),
        };

        // build the response processing.
        return new Promise((_fulfill, _reject) => {
            _request(_options, (_error, _response, _context) => {
                let errorResponse;
                if (_error) {
                    errorResponse = _baseController.validateResponse(_context);
                    _callback(errorResponse.error, errorResponse.response, errorResponse.context);
                    _reject(errorResponse.error);
                } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
                    const parsed = JSON.parse(_response.body);
                    _callback(null, parsed, _context);
                    _fulfill(parsed);
                } else {
                    errorResponse = _baseController.validateResponse(_context);
                    _callback(errorResponse.error, errorResponse.response, errorResponse.context);
                    _reject(errorResponse.error);
                }
            });
        });
    }
    /**
     * Delete a geofence region attached to the specified geofence
     *
     * @param  {array}  input    Array with all options for search
     * @param {string} input['networkId'] TODO: type description here
     * @param {string} input['geofenceId'] TODO: type description here
     * @param {string} input['regionId'] TODO: type description here
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static deleteNetworkSmGeofenceRegion(input, callback) {
        // create empty callback if absent
        const _callback = typeof callback === 'function' ? callback : () => undefined;

        // validating required parameters
        if (input.networkId === null || input.networkId === undefined) {
            const _err = { errorMessage: 'The property `networkId` in the input object cannot be null.',
                errorCode: -1 };
            _callback(_err, null, null);
            return Promise.reject(_err);
        } else if (input.geofenceId === null || input.geofenceId === undefined) {
            const _err = { errorMessage: 'The property `geofenceId` in the input object cannot be null.',
                errorCode: -1 };
            _callback(_err, null, null);
            return Promise.reject(_err);
        } else if (input.regionId === null || input.regionId === undefined) {
            const _err = { errorMessage: 'The property `regionId` in the input object cannot be null.',
                errorCode: -1 };
            _callback(_err, null, null);
            return Promise.reject(_err);
        }
        // prepare query string for API call
        const _baseUri = _configuration.BASEURI;

        let _pathUrl = '/networks/{networkId}/sm/geofences/{geofenceId}/regions/{regionId}';
        // process template parameters
        _pathUrl = _apiHelper.appendUrlWithTemplateParameters(_pathUrl, {
            networkId: input.networkId,
            geofenceId: input.geofenceId,
            regionId: input.regionId,
        });

        const _queryBuilder = `${_baseUri}${_pathUrl}`;

        // validate and preprocess url
        const _queryUrl = _apiHelper.cleanUrl(_queryBuilder);

        // prepare headers
        const _headers = {
            'X-Cisco-Meraki-API-Key': _configuration.xCiscoMerakiAPIKey,
        };

        // construct the request
        const _options = {
            queryUrl: _queryUrl,
            method: 'DELETE',
            headers: _headers,
        };

        // build the response processing.
        return new Promise((_fulfill, _reject) => {
            _request(_options, (_error, _response, _context) => {
                let errorResponse;
                if (_error) {
                    errorResponse = _baseController.validateResponse(_context);
                    _callback(errorResponse.error, errorResponse.response, errorResponse.context);
                    _reject(errorResponse.error);
                } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
                    _callback(null, null, _context);
                    _fulfill();
                } else {
                    errorResponse = _baseController.validateResponse(_context);
                    _callback(errorResponse.error, errorResponse.response, errorResponse.context);
                    _reject(errorResponse.error);
                }
            });
        });
    }
}
module.exports = GeofenceRegionsController;
