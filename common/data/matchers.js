window.matchers = [

    /* * * * * Captain abilities * * * * */

    {
        name: 'Type-boosting captains',
        target: 'captain',
        matcher: /Boosts (ATK|HP|RCV|ATK and HP|ATK and RCV|HP and RCV|ATK, HP and RCV) of[^,]+(STR|DEX|QCK|PSY|INT)\b/i
    },

    {
        name: 'Class-boosting captains',
        target: 'captain',
        matcher: /Boosts (ATK|HP|RCV|ATK and HP|ATK and RCV|HP and RCV|ATK, HP and RCV) of[^,]+(Slasher|Striker|Fighter|Shooter|Freedom|Knowledge|Tough|Ambition)/i
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
        name: 'Special boosting captains',
        target: 'captain',
        matcher: /Boosts damage.+specials/i
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
        matcher: /Protects from defeat/i
    },

    /* * * * * Specials * * * * */

    {
        name: 'Type-boosting specials',
        target: 'special',
        matcher: /Boosts (ATK|HP|RCV|ATK and HP|ATK and RCV|HP and RCV|ATK, HP and RCV) of[^,]+(STR|DEX|QCK|PSY|INT)\b/i
    },

    {
        name: 'Class-boosting specials',
        target: 'special',
        matcher: /Boosts (ATK|HP|RCV|ATK and HP|ATK and RCV|HP and RCV|ATK, HP and RCV) of[^,]+(Slasher|Striker|Fighter|Shooter|Freedom|Knowledge|Tough|Ambition)/i
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
        name: 'Conditional ATK boosters',
        target: 'special',
        matcher: /Boosts ATK.+against.+enemies/i
    },

    {
        name: 'Delayed ATK boosters',
        target: 'special',
        matcher: /(Following the activation.+boosts.+ATK|If during that turn.+boosts.+ATK)/i
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
        name: 'Orb chance boosters',
        target: 'special',
        matcher: /boosts chances of getting.+orbs/i
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
        matcher: /switches orbs/i
    },

    {
        name: 'Slot emptiers',
        target: 'special',
        matcher: /(Empties|Changes.+into.+\[EMPTY\])/i
    },

    {
        name: 'Slot fillers',
        target: 'special',
        matcher: /(Fills\b|\[EMPTY\] orbs into|Changes.+\[EMPTY\].+into)/i
    },

    {
        name: 'Delayers',
        target: 'special',
        matcher: /delays/i
    },

    {
        name: 'Multi-target damage dealers',
        target: 'special',
        matcher: /Deals.+to (all|random) enemies/i
    },

    {
        name: 'Multi-hit damage dealers',
        target: 'special',
        matcher: /Deals \d+ hits/i
    },

    {
        name: 'Fixed damage dealers',
        target: 'special',
        matcher: /Deals.+fixed damage/i
    },

    {
        name: 'Health cutters',
        target: 'special',
        matcher: /Cuts.+current HP.+enem/i
    },

    {
        name: 'HP-based damage dealers',
        target: 'specialNotes',
        matcher: /to compute the damage.*higher the lower the HP is/i
    },

    {
        name: 'Defense reducers',
        target: 'special',
        matcher: /Reduces.+defense/i
    },

    {
        name: 'Meat producers',
        target: 'special',
        matcher: /into( either)?[\s,\[\]A-Zor]+\[RCV\]/
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
        name: 'Block orb removers',
        target: 'special',
        matcher: /(empties.+with \[BLOCK\]|changes.+\[BLOCK\].+into|including.+\[BLOCK\])/i,
    },

    {
        name: 'Blindness removers',
        target: 'special',
        matcher: /removes blindness/i
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
        name: 'Poison removers',
        target: 'special',
        matcher: /Removes poison/i
    },

    {
        name: 'Zombies',
        target: 'special',
        matcher: /Prevents death/i
    }

];
