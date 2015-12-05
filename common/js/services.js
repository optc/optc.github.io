(function() {

var app = angular.module('optc');
var services = { };

/************
 * Services *
 ************/

services.$storage = function() {

    var storage = null;
    try { storage = localStorage; }
    catch (e) { console.warn('localStorage not supported, data will not be persisted.'); }

    return {
    
        get: function(key, defaultValue) {
            if (storage === null) return defaultValue;
            return JSON.parse(storage.getItem(key)) || defaultValue;
        },

        set: function(key, value) {
            if (storage === null) return;
            storage.setItem(key, JSON.stringify(value));
        },

        has: function(key) {
            if (storage === null) return false;
            return storage.hasOwnProperty(key);
        },

        remove: function(key) {
            if (storage === null) return;
            storage.removeItem(key);
        }

    };

};

/******************
 * Initialization *
 ******************/

for (var service in services)
    app.factory(service, services[service]);

})();
