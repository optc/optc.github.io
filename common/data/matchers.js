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
        matcher: /Boosts (ATK|HP|RCV|ATK and HP|ATK and RCV|HP and RCV|ATK, HP and RCV) of[^,]+(Slasher|Striker|Fighter|Shooter|Free Spirit|Cerebral|Powerhouse|Driven)/i
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
        matcher: /(after scoring|following a chain|perfect|great|good)/i
    },
    
    {
        name: '"Beneficial" Orb captains',
        target: 'captain',
        matcher: /"beneficial/i
        //matcher: /Makes ((STR|DEX|QCK|PSY|INT|\[RCV\]|\[TND\])|((STR|DEX|QCK|PSY|INT|\[RCV\]|\[TND\]) and (STR|DEX|QCK|PSY|INT|\[RCV\]|\[TND\]))) orbs "beneficial"/i
    },

    {
        name: 'Chain multipliers',
        target: 'captain',
        matcher: /Boosts.+chain multiplier/i
    },
    
    {
        name: 'Combo Boost Captains',
        target: 'captain',
        matcher: /Boosts.+hit in the chain/i
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
    
    {
        name: 'End of Turn Damage Dealer',
        target: 'captain',
        matcher: /deals.+end of each turn/i
    },
    
    {
        name: 'Beli Boosters',
        target: 'captain',
        matcher: /boosts.+Beli/i
    },
    
    {
        name: 'EXP Boosters',
        target: 'captain',
        matcher: /boosts.+EXP/i
    },
    
    {
        name: 'Drop Doublers',
        target: 'captain',
        matcher: /duplicating a drop/i
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
        matcher: /Boosts (ATK|HP|RCV|ATK and HP|ATK and RCV|HP and RCV|ATK, HP and RCV) of[^,]+(Slasher|Striker|Fighter|Shooter|Free Spirit|Cerebral|Powerhouse|Driven)/i
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
        name: 'Color Affinity boosters',
        target: 'special',
        matcher: /Boosts the Color Affinity/i
    },
    
    {
        name: 'Combo Boost Specials',
        target: 'special',
        matcher: /Boost.+hit in the chain/i
    },
    
    {
        name: 'RCV boosters',
        target: 'special',
        matcher: /Boosts RCV/i
    },

    {
        name: 'Orb lockers',
        target: 'special',
        matcher: /locks.+orb/i
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
        name: 'Negative to Positive Orb controllers',
        target: 'special',
        matcher: /(Badly Matching orbs into.+Matching orbs)/i,
        //include: [ 900, 901, 996, 997, 933, 938, 939 ],
    },

    {
        name: 'Orb controllers',
        target: 'special',
        matcher: /(Changes.+(orb|orbs))/i
    },
    
    {
        name: 'Full-board orb controllers',
        target: 'special',
        matcher: /(Changes[^,]+all orbs|Changes the orbs in|Changes[^,]*every other orb)/i
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
        name: 'Orb matchers',
        target: 'special',
        matcher: /(Changes.+(orb|orbs))[^,]+Matching/i,
        include: [ 1036, 1037, 1445, 1369, 1370 ]
    },

    {
        name: 'Slot emptiers',
        target: 'special',
        matcher: /(Empties|Changes.+into.+\[EMPTY\])/i
    },

    /*{
        name: 'Slot fillers',
        target: 'special',
        matcher: /(Fills\b|\[EMPTY\] orbs into|Changes.+\[EMPTY\].+into)/i
    },*/

    {
        name: 'Delayers',
        target: 'special',
        matcher: /delays/i
    },
    
    {
        name: 'Single-target damage dealer',
        target: 'special',
        matcher: /deals.+to one enemy/i
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
        name: 'Typeless damage dealers',
        target: 'special',
        matcher: /Deals.+typeless damage/i
    },

    {
        name: 'Health cutters',
        target: 'special',
        matcher: /Cuts.+current HP.+enem/i
    },

    {
        name: 'HP-based damage dealers',
        target: 'specialNotes',
        matcher: /specialProportional/i
    },

    {
        name: 'Defense reducers',
        target: 'special',
        matcher: /Reduces.+defense/i
    },

    /*{
        name: 'Meat producers',
        target: 'special',
        matcher: /into( either)?[\s,\[\]A-Zor]+\[RCV\]/
    },

    {
        name: 'Meat converters',
        target: 'special',
        matcher: /\[RCV\].+into/i
    },*/

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
    
    /*{
        name: 'Debuff Reducing Specials',
        target: 'special',
        matcher: /(reduces|removes) [^,]+(Bind|Despair|Silence|Paralysis|Blindness|Poison|No Healing|Chain Limit).+duration/i
    },*/

    {
        name: 'Bind reducers',
        target: 'special',
        matcher: /(reduces|removes).+bind.+duration/i
    },

    {
        name: 'Despair reducers',
        target: 'special',
        matcher: /(reduces|removes).+despair.+duration/i
    },
    
    {
        name: 'Silence reducers',
        target: 'special',
        matcher: /(reduces|removes).+silence.+duration/i
    },
    
    {
        name: 'Paralysis reducers',
        target: 'special',
        matcher: /(reduces|removes).+Paralysis/i 
    },

    {
        name: 'Block orb removers',
        target: 'special',
        matcher: /(empties.+with \[BLOCK\]|changes.+\[BLOCK\].+into|including.+\[BLOCK\])/i
    },

    {
        name: 'Blindness removers',
        target: 'special',
        matcher: /(reduces|removes).+blindness/i
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
        matcher: /removes.+poison/i 
    },

    {
        name: 'Crew positive buff remover',
        target: 'special',
        matcher: /removes.+positive buffs/i 
    },

    {
        name: 'End of Turn buff remover',
        target: 'special',
        matcher: /removes.+End of Turn/i 
    },

    {
        name: 'Enrage buff remover',
        target: 'special',
        matcher: /removes.+Enrage/i 
    },

    {
        name: 'Enemy ATK buff remover',
        target: 'special',
        matcher: /(removes|reduces).+ATK up/i 
    },

    {
        name: 'Zombies',
        target: 'special',
        matcher: /Protects from defeat/i
    },
    
    {
        name: 'Special cooldown reducer',
        target: 'special',
        matcher: /reduces special cooldown/i
    },
    
    {
        name: 'Chain Boosters',
        target: 'special',
        matcher: /Adds.+to Chain/i 
    },
    
    {
        name: 'Chain Lockers',
        target: 'special',
        matcher: /Locks the chain multiplier/i 
    },
    
    {
        name: '"Beneficial" Orb Enablers',
        target: 'special',
        matcher: /"beneficial/i
    },
    
    /* * * * * Sailor * * * * */
    
    {
        name: 'Has Sailor Ability',
        target: 'sailor',
        matcher: /\S/i
    },
    
    {
        name: 'Type-boosting sailors',
        target: 'sailor',
        matcher: /Boosts base (ATK|HP|RCV|ATK and HP|ATK and RCV|HP and RCV|ATK, HP and RCV) of[^,]+(STR|DEX|QCK|PSY|INT)\b/i
    },
    
    {
        name: 'Class-boosting sailors',
        target: 'sailor',
        matcher: /Boosts base (ATK|HP|RCV|ATK and HP|ATK and RCV|HP and RCV|ATK, HP and RCV) of[^,]+(Slasher|Striker|Fighter|Shooter|Free Spirit|Cerebral|Powerhouse|Driven)/i
    },
    
    {
        name: 'ATK boosting sailors',
        target: 'sailor',
        matcher: /Boosts base ATK/i
    },

    {
        name: 'HP boosting sailors',
        target: 'sailor',
        matcher: /Boosts base (HP|ATK and HP|ATK, HP)|Boosts.+and their HP/i
    },

    {
        name: 'RCV boosting sailors',
        target: 'sailor',
        matcher: /Boosts base (RCV|ATK and RCV|HP and RCV|ATK, HP and RCV)|Boosts.+and their RCV/i
    },
    
    {
        name: '"Beneficial" Orb sailors',
        target: 'sailor',
        matcher: /"beneficial/i
    },
    
    {
        name: 'Paralysis reducers',
        target: 'sailor',
        matcher: /(reduces|removes).+Paralysis/i 
    },

    {
        name: 'Blindness removers',
        target: 'sailor',
        matcher: /(reduces|removes|resists).+blindness/i
    },
    
    {
        name: 'Silence reducers',
        target: 'sailor',
        matcher: /(reduces|removes|resists).+silence/i
    },
    
    {
        name: 'Special Rewind Restorers',
        target: 'sailor',
        matcher: /Restores (his|her) own special/i
    },
    
    /* * * * * Limit Break * * * * */
    
    {
        name: 'Has Limit Break',
        target: 'limit',
        matcher: /\S/i
    },
    
    {
        name: 'Enrage Potential Ability',
        target: 'limit',
        matcher: /Enrage/i
    },
    
    {
        name: 'Reduce No Healing Potential Ability',
        target: 'limit',
        matcher: /Reduce No Healing/i
    },
    
    {
        name: 'Critical Hit Potential Ability',
        target: 'limit',
        matcher: /Critical Hit/i
    },
    
    {
        name: 'Slot Bind Self-reduction Potential Ability',
        target: 'limit',
        matcher: /Slot Bind Self-reduction/i
    },
    
    {
        name: 'Barrier Penetration Potential Ability',
        target: 'limit',
        matcher: /Barrier Penetration/i
    },
    
    {
        name: 'Pinch Healing Potential Ability',
        target: 'limit',
        matcher: /Pinch Healing/i
    },

];
