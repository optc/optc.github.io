import { DBdetail, DButils, DBunit } from "./DBLoader"

// Split generated family query
function splitCriteria(criteria){
    if (!criteria)
        return null;
    let params = criteria.split(' ');
    let families = [];
    for (let param of params){
        if (!param.startsWith('family:^('))
            continue;
        families = param
            .slice(9, -2) // strip `family:^(` and `)$`
            .split('|')
            .map(family => family.replace(/_+/g, ' ').replace(/\\/g, ''));
    }
    return families;
}

/**
 * This throws errors instead of using jest's expect matchers, because the
 * matchers would show the whole allFamilies array for every failed family name.
 * Throwing an error would let us use a custom fail message.
 */
describe('Used family names should be valid', () => {
    let allFamilies = Object.keys(DButils.getReverseFamilyMap());
    allFamilies.push("Toy Bears"); // No such family name yet, but it is valid (Sugar)

    describe("Supported characters' families", () => {
        for (let id in DBdetail) {
            const data = DBdetail[id];
            if (!data.support)
                continue;

            // stored in an array, though there doesn't seem to be any unit that has multiple supports
            for (const supportData of data.support){
                expect(supportData.Characters).toBeDefined();

                let criteria = DButils.generateSupportedCharactersQuery(supportData.Characters);
                if (!criteria)
                    continue;

                let familyNames = splitCriteria(criteria);
                for (const familyName of familyNames) {
                    it(`checks if ${familyName} is in window.families`, () => {
                        if (!allFamilies.includes(familyName)){
                            throw new Error(`${id} support: "${familyName}" should be in window.families (families.js)`);
                        }
                    });
                }
            }
        }
    })

    describe('Super special criteria families', () => {
        for (let id in DBdetail) {
            let data = DBdetail[id];

            if (!data.superSpecialCriteria)
                continue;

            let criteria = DButils.generateSuperSpecialQuery(data.superSpecialCriteria);
            if (!criteria)
                continue;

            let familyNames = splitCriteria(criteria);
            for (const familyName of familyNames) {
                it(`checks if ${familyName} is in window.families`, () => {
                    if (!allFamilies.includes(familyName)){
                        throw new Error(`${id} superSpecial: "${familyName}" should be in window.families (families.js)`);
                    }
                });
            }
        }
    });
});
