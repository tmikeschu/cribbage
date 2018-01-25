import { pairPoints, runPoints } from "./hands"

describe("hand calculations", () => {
  describe("pairPoints", () => {
    it("counts 2 points for one pair", () => {
      const cards = "K Q Q 10 2".split(" ")
      const actual = pairPoints(cards)
      const expected = 2
      expect(actual).toEqual(expected)
    })

    it("counts 6 points for three of a kind", () => {
      const cards = "Q Q Q 10 2".split(" ")
      const actual = pairPoints(cards)
      const expected = 6
      expect(actual).toEqual(expected)
    })

    it("counts 12 points for four of a kind", () => {
      const cards = "Q Q Q Q 2".split(" ")
      const actual = pairPoints(cards)
      const expected = 12
      expect(actual).toEqual(expected)
    })

    it("counts 4 points for two pair", () => {
      const cards = "Q Q K K 2".split(" ")
      const actual = pairPoints(cards)
      const expected = 4
      expect(actual).toEqual(expected)
    })

    it("counts 8 points for a full house", () => {
      const cards = "Q Q K K K".split(" ")
      const actual = pairPoints(cards)
      const expected = 8
      expect(actual).toEqual(expected)
    })
  })

  describe("runPoints", () => {
    it("counts 5 for a run of 5", () => {
      const cards = "8 6 7 5 9".split(" ")
      const actual = runPoints(cards)
      const expected = 5
      expect(actual).toEqual(expected)
    })

    xit("counts 4 for a run of 4", () => {
      const cards = "2 6 7 5 9".split(" ")
      const actual = runPoints(cards)
      const expected = 4
      expect(actual).toEqual(expected)
    })
  })
})
