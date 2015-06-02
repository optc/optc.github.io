(function() {

var debouncers = { };

/* * * * * Private functions * * * * */

var getThumbnailUrl = function(n) {
    var id = ('0000' + (n+1)).slice(-4).replace(/(057[54])/,'0$1'); // missing aokiji image
    return 'http://onepiece-treasurecruise.com/wp-content/uploads/f' + id + '.png';
};

var getTitle = function(unit) {
    return [ unit.name,
        'ATK: ' + unit.maxATK,
        'HP: ' + unit.maxHP,
        'Cost: ' + unit.cost
    ].join('\n');
};

/* * * * * Public functions * * * * */

var debounce = function(name,func) {
    return function() {
        if (debouncers[name] !== null) clearTimeout(debouncers[name]);
        debouncers[name] = setTimeout(func.bind(this),500);
    };
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

/* * * * * Body * * * * */

window.Utils = {
    debounce: debounce,
    createThumbnail: createThumbnail,
    getThumbnailUrl: getThumbnailUrl
};

})();
