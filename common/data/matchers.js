window.matchers = [

    /* * * * * Captain abilities * * * * */

    {
        name: 'Type-boosting captains',
        target: 'captain',
        matcher: /Boosts.+(STR|DEX|QCK|PSY|INT)\b/i
    },

    {
        name: 'Class-boosting captains',
        target: 'captain',
        matcher: /Boosts.+(Slasher|Striker|Fighter|Shooter)/i
    },

    {
        name: 'ATK boosting captains',
        target: 'captain',
        matcher: /Boosts ATK/i
    },

    {
        name: 'HP boosting captains',
        target: 'captain',
        matcher: /Boosts (HP|ATK and HP|ATK, HP)|Boosts.+and their HP/i
    },

    {
        name: 'RCV boosting captains',
        target: 'captain',
        matcher: /Boosts (RCV|ATK and RCV|HP and RCV|ATK, HP and RCV)|Boosts.+and their RCV/i
    },

    {
        name: '2x ATK and HP captains',
        target: 'captain',
        matcher: /Boosts (ATK and HP|ATK, HP).+by 2x/i
    },

    {
        name: '2x ATK and RCV captains',
        target: 'captain',
        matcher: /Boosts ATK and RCV.+by 2x/i
    },

    {
        name: '2.5x ATK captains',
        target: 'captain',
        matcher: /Boosts (their )?ATK.+by 2.5x/i
    },

    {
        name: '2.75x ATK captains',
        target: 'captain',
        matcher: /Boosts (their )?ATK.+by 2.75x/i,
        include: [ 529, 530, 668, 669 ]
    },

    {
        name: '3x ATK captains',
        target: 'captain',
        matcher: /Boosts (their )?ATK.+by 3x/i
    },

    {
        name: 'HP-based ATK captains',
        target: 'captain',
        matcher: /Boosts ATK.+proportionally to/i
    },

    {
        name: 'Positional captains',
        target: 'captain',
        matcher: /(after scoring|following a chain)/i
    },

    {
        name: 'Chain multipliers',
        target: 'captain',
        matcher: /Boosts.+chain multiplier/i
    },

    {
        name: 'Cooldown reducers',
        target: 'captain',
        matcher: /reduces.+cooldown/i
    },

    {
        name: 'Damage reducers',
        target: 'captain',
        matcher: /Reduces (any )?damage received/i
    },

    {
        name: 'Healers',
        target: 'captain',
        matcher: /Recovers/i
    },

    {
        name: 'Tankers',
        target: 'captain',
        matcher: /Reduces (any )?damage.+if HP.+99/i
    },

    {
        name: 'Zombies',
        target: 'captain',
        matcher: /Prevents death/i
    },

    /* * * * * Specials * * * * */

    {
        name: 'Type-boosting specials',
        target: 'special',
        matcher: /Boosts.+of (STR|DEX|QCK|PSY|INT)\b/i
    },

    {
        name: 'Class-boosting specials',
        target: 'special',
        matcher: /Boosts.+ of (Slasher|Striker|Fighter|Shooter)/i
    },

    {
        name: '1.5x ATK specials',
        target: 'special',
        matcher: /Boosts ATK.+by 1.5x/i
    },

    {
        name: '1.75x ATK specials',
        target: 'special',
        matcher: /Boosts ATK.+by 1.75x/i
    },

    {
        name: '2x ATK specials',
        target: 'special',
        matcher: /Boosts ATK.+by 2x/i
    },

    {
        name: 'Orb lockers',
        target: 'special',
        matcher: /lock.+orbs/i
    },

    {
        name: 'Orb boosters',
        target: 'special',
        matcher: /amplifies.+orb/i
    },

    {
        name: 'Orb controllers',
        target: 'special',
        matcher: /(Changes.+orbs)/i
    },

    {
        name: 'Full-board orb controllers',
        target: 'special',
        matcher: /(Changes.+all orbs|Changes the orbs in|Changes[^,]*every other orb)/i
    },

    {
        name: 'Self-orb controllers',
        target: 'special',
        matcher: /Changes.+own orb.+into/i
    },

    {
        name: 'Orb randomizers',
        target: 'special',
        matcher: /randomizes.+orb/i
    },

    {
        name: 'Orb switchers',
        target: 'special',
        matcher: /freely switch/i
    },

    {
        name: 'Slot fillers',
        target: 'special',
        matcher: /(Fills.*slots|empty orbs into|Changes empty slots)/i
    },

    {
        name: 'Delayers',
        target: 'special',
        matcher: /delays/i
    },

    {
        name: 'Fixed damage dealers',
        target: 'special',
        matcher: /Deals [\d,]+ fixed damage|(fixed (STR|DEX|QCK|PSY|INT))/i
    },

    {
        name: 'Percentage damage dealers',
        target: 'special',
        matcher: /Cuts.+enem.+current HP/i
    },

    {
        name: 'Defense reducers',
        target: 'special',
        matcher: /Reduces.+defense/i
    },

    {
        name: 'Meat producers',
        target: 'special',
        matcher: /into.+\[RCV\]/i
    },

    {
        name: 'Meat converters',
        target: 'special',
        matcher: /\[RCV\].+into/i
    },

    {
        name: 'Damage reducers',
        target: 'special',
        matcher: /Reduces (any )?damage received/i
    },

    {
        name: 'Damage nullifiers',
        target: 'special',
        matcher: /Reduces (any )?damage received.+100%/i
    },

    {
        name: 'Bind reducers',
        target: 'special',
        matcher: /reduces.+bind.+duration/i,
    },

    {
        name: 'Silence reducers',
        target: 'special',
        matcher: /reduces.+silence.+duration/i,
    },

    {
        name: 'Hindrance removers',
        target: 'special',
        matcher: /(empties.+with hindrance|changes.+hindrance.+into)/i,
    },

    {
        name: 'Healers',
        target: 'special',
        matcher: /Recovers/i
    },

    {
        name: 'Health reducers',
        target: 'special',
        matcher: /Reduces crew's (current )?HP/i
    },

    {
        name: 'Poisoners',
        target: 'special',
        matcher: /poisons/i
    },

    {
        name: 'Zombies',
        target: 'special',
        matcher: /Prevents death/i
    }

];
