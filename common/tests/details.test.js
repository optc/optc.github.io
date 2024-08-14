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

describe('Typos', () => {
    for (let id in DBdetail) {
        let data = DBdetail[id];
        if (Number(id) >= 5000) // ignore ghost units because they use same descriptions, so no need to check them
            break;
        for (let property in data){
            // some typos are important, as they could cause regexes to not match properly
            describe(`${id}: ${property}`, () => { // not only does this show the unit ID, but this also allows tests to continue even when it fails on one unit
                let target = data[property];
                if (typeof target !== 'string')
                    target = JSON.stringify(target);
                it('checks for consecutive spaces', () => { // important
                    let corrected = target.replace(/ {2,}/g, ' ');
                    expect(target).toBe(corrected);
                });
                it('checks for invalid variable multipliers', () => { // important
                    let corrected = target.replace(/([?.\d]+)(?:-([?.\d]+)(%|x))/g, '$1$3-$2$3');
                    expect(target).toBe(corrected);
                    // expect(target).toEqual(expect.not.stringMatching(/([?.\d]+)(?:-([?.\d]+)(%|x))/));
                });
                it('checks for "1 turns"', () => {
                    let corrected = target.replace(/\b1 turns/g, '1 turn');
                    expect(target).toBe(corrected);
                });
                it('checks for "n turn"', () => {
                    let corrected = target.replace(/\b(\d{2,}|[02-9]) turn(?!s)/g, '$1 turns');
                    expect(target).toBe(corrected);
                });
                it('checks for "ie" typos', () => { // important
                    // let corrected = target.replace(/thier/g, 'their').replace(/recieve/g, 'receive');
                    // expect(target).toBe(corrected);
                    expect(target).toEqual(expect.not.stringMatching(/thier|recieve/));
                });
                it('checks for "a" that should be "an"', () => {
                    // "an 8%" or "an 80%"
                    // "an [INT] orb" or "an [INT] character"
                    expect(target).toEqual(expect.not.stringMatching(/\ba (8|\[INT\])/)); 
                });
            });
        }
    }
});
