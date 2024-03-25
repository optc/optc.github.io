import { DBSpecial, DBunit } from "../DBLoader"

describe('Special tests', () => {

  it('Crocodile should ATK boost himself by 2.5', () => {
    const payload = { unit: DBunit[3482] }

    const result = DBSpecial[3483].atk(payload)

    expect(result).toBe(2.5)
  })
})
