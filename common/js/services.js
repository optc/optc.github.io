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
            try {
                return JSON.parse(storage.getItem(key)) || defaultValue;
            } catch (e) { return defaultValue; }
        },

        set: function(key, value) {
            if (storage === null) return;
            try {
                storage.setItem(key, JSON.stringify(value));
            } catch(e) { }
        },

        has: function(key) {
            if (storage === null) return false;
            try {
                return storage.hasOwnProperty(key);
            } catch(e) { return false; }
        },

        remove: function(key) {
            if (storage === null) return;
            try {
                storage.removeItem(key);
            } catch(e) { }
        }

    };

};

/******************
 * Initialization *
 ******************/

for (var service in services)
    app.factory(service, services[service]);

})();
