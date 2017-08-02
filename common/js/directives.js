(function() {

var notes = {
    captainProportional: "The exact multiplier used to compute the damage is proportional to the " +
        "crew's remaining HP and is higher the #1 the HP is. The multiplier is calculated as #2. " +
        "At full health the boost is equal to #3x, with 1 HP left to #4x.",
    captainFixed:"The multiplier is #1 unless #2, in which case it is #3.",
    fixed: "Fixed damage means it entirely bypasses the enemy's defense.",
    gOrbs: "Characters with [G] orbs will deal 1.5x their normal damage. [G] orbs are affected by orb boosters.",
	noFixedPerc: "Specials that deal fixed damage or cut a percentage of the enemy's HP are not " +
        "affected by this captain ability",
    orb: "Orb amplification only affects matching and opposite orbs and works both ways: " +
        "matching orbs will deal #1 more damage and opposite orbs will deal #1 less damage.",
    poison: "Poison deals 0.5x character's ATK in fixed damage at the end of each turn.",
    random: "Estimated random damage range: between #1 HP and #2 HP #3.",
    randomHeal: "Estimated random recovery range: between #1 HP and #2 HP.",
    randomHits: "The target of each of the #1 hits is chosen randomly.",
    specialProportional: "The exact multiplier used to compute the damage is proportional to the " +
        "crew's remaining HP and is higher the #1 the HP is. The multiplier is calculated as: #2.",
    stages: "The special can be used as soon as the first stage is reached.",
    silence: "This is called 'Special Bind' in-game and refers to effects that prevent you from activating Special Abilities.",
    rewind: "Some enemies can increase your cooldown by 1/2 turns, this Sailor Ability decreases that by #1 turn.",
    ignoreBarrier: "Damage that ignores damage negating abilities and barriers is similar to 6* Law's special, but only for this character.",
    zombie: "The protection only works when attacked by one single enemy and will leave the team with at least 1 HP; " +
        "the effect will not work when attacked by multiples enemies at once.",
    colorAffinity: "'Color Affinity' boosts color type advantages. For example, a STR unit normally deals 2x to a DEX unit and .5x to QCK. With this Color Affinity boost, it will deal (2*#1)x to DEX and (0.5/#1)x to QCK.",
    instantKill: "The chance for this character to instantly kill any enemy is #1. The kills can not be reset by exiting the game, but can change by passing the turn or killing an enemy.",
    additionalDamage: "Every attacking character gains additional damage if they land a hit no less than Good.",
};

/***********
 * Angular *
 ***********/

var app = angular.module('optc');
var directives = { }, filters = { };

/************************
 * Attribute directives *
 ************************/

directives.toInt = function() {
    return {
        restrict: 'A',
        require: 'ngModel',
        link: function(scope, element, attrs, ngModel) {
            ngModel.$parsers.push(function(value) { return '' + value; });
            ngModel.$formatters.push(function(value) { return parseInt(value, 10); });
        }
    };
};

/**********************
 * Element directives *
 **********************/

directives.linkButton = function() {
    return {
        restrict: 'E',
        replace: true,
        templateUrl: '../common/views/links.html',
        scope: { exclude: '@' },
        link: function(scope, element, attrs) {
            element.find(".trigger").click(function() {
                element.toggleClass("active"); 
            });
        }
    };
};

/***********
 * Filters * 
 ***********/

filters.decorate = function() {
    return function(input) {
        if (!input) return 'None';
        if (input.constructor == Array) input = input[0];
        if (input.constructor != String) return 'N/A';
        return input
            .replace(/\[?(STR|DEX|QCK|PSY|INT)\]?/g,'<span class="badge $1">$1</span>')
            .replace(/\[RCV\]/g,'<span class="badge RCV">RCV</span>')
            .replace(/\[TND\]/g,'<span class="badge TND"><i class="tnd-icon"></i> TND</span>')
            .replace(/\[EMPTY\]/g,'<span class="badge EMPTY"><i class="fa fa-circle-o"></i> EMPTY</span>')
            .replace(/\[BLOCK\]/g,'<span class="badge BLOCK"><i class="block-icon"></i> BLOCK</span>')
            .replace(/\[BOMB\]/g,'<span class="badge BOMB"><i class="fa fa-bomb"></i> BOMB</span>')
            .replace(/\[RAINBOW\]/g,'<span class="badge RAINBOW"></i> RAINBOW</span>')
            .replace(/\[G\]/g,'<span class="badge G">G</span>');
    };
};

filters.range = function() {
    return function(input, total) {
        total = parseInt(total,10);
        for (var i=0;i<total;++i) input.push(i);
        return input;
    };
};

filters.notes = function() {
    return function(input) {
        if (!input) return input;
        return input.trim().replace(/#\{(.+?)\}/g,function(x,y) {
            var tokens = y.trim().split(/:/);
            if (!tokens.length || !notes.hasOwnProperty(tokens[0].trim())) return x;
            return notes[tokens[0].trim()].replace(/#(\d+)/g,function(a,b) {
                return (tokens[parseInt(b,10)] || '').trim();
            });
        });
    };
};

/******************
 * Initialization *
 ******************/

for (var directive in directives)
    app.directive(directive, directives[directive]);

for (var filter in filters)
    app.filter(filter, filters[filter]);

})();
