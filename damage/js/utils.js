(function() {

var debouncers = { };

var notifications = { };

/* * * * * Thumbnail control * * * * */

var getThumbnailUrl = function(n) {
    var id = ('0000' + (n+1)).slice(-4).replace(/(057[54])/,'0$1'); // missing aokiji image
    return 'http://onepiece-treasurecruise.com/wp-content/uploads/f' + id + '.png';
};

var getTitle = function(n) {
    var unit = units[n];
    return [ unit.name,
        'HP: ' + unit.maxHP,
        'ATK: ' + unit.maxATK,
        'RCV: ' + unit.maxRCV,
        'CMB: ' + unit.combo,
        'Cost: ' + unit.cost
    ].join('\n');
};

var createThumbnail = function(n,isSmall,onClick) {
    var result = document.createElement('div');
    result.className = 'unitThumbnail' + (isSmall ? ' small' : '');
    result.style.backgroundImage = 'url(' + getThumbnailUrl(n) + ')';
    result.setAttribute('unitID',n);
    result.setAttribute('title',getTitle(units[n]));
    if (onClick !== undefined && onClick !== null) $(result).click(onClick);
    return result;
};

var isClickOnOrb = function(e,target) {
    var x = e.pageX - target.offsetParent.offsetLeft, y = e.pageY - target.offsetParent.offsetTop;
    var distance = Math.sqrt(Math.pow(x-20,2)+Math.pow(y-21,2));
    return distance < 13;
};

/* * * * * Misc functions * * * * */

var arrayProduct = function(data) {
    var result = data.reduce(function(prev,next) {
        if (next.length === 0) return prev;
        return next.map(function(n) {
            return prev.map(function(p) {
                return p.concat([ n ]);
            });
        }).reduce(function(prev,next) { return prev.concat(next); },[ ]);
    },[ [ ] ]);
    return result.filter(function(r) { return r.length > 0; });
};

var debounce = function(name,func) {
    return function() {
        if (debouncers[name] !== null) clearTimeout(debouncers[name]);
        debouncers[name] = setTimeout(func.bind(this),500);
    };
};

/* * * * * Notifications * * * * */

var notify = function(text,type,timeout,id) {
    if (id !== undefined && notifications.hasOwnProperty(id)) notifications[id].close();
    var result = noty({ text: text, type: type, layout: 'topRight', timeout: timeout });
    if (id !== undefined) notifications[id] = result;
};

var warn = function(text,id) { notify(text,'warning',2500,id); };
var info = function(text,id) { notify(text,'information',false,id); };
var alrt = function(text,id) { notify(text,'alert',3000,id); };

/* * * * * Body * * * * */

window.Utils = {
    // thumbnails
    createThumbnail: createThumbnail,
    getThumbnailUrl: getThumbnailUrl,
    getThumbnailTitle: getTitle,
    isClickOnOrb: isClickOnOrb,
    // misc
    debounce: debounce,
    arrayProduct: arrayProduct,
    // notifications
    warn: warn,
    info: info,
    alrt: alrt
};

})();
