import fifteenPoints from "./fifteenPoints"

describe("fifteenPoints", () => {
  it("counts 2 points for one sum of 15", () => {
    const cards = "8 7 2 2 2".split(" ")
    const actual = fifteenPoints(cards)
    const expected = 2
    expect(actual).toEqual(expected)
  })

  it("counts 4 points for two sums of 15", () => {
    const cards = "8 7 9 6 10".split(" ")
    const actual = fifteenPoints(cards)
    const expected = 4
    expect(actual).toEqual(expected)
  })

  it("counts 6 points for three sums of 15", () => {
    const cards = "8 7 7 6 9".split(" ")
    const actual = fifteenPoints(cards)
    const expected = 6
    expect(actual).toEqual(expected)
  })

  it("counts 8 points for four sums of 15", () => {
    const cards = "8 7 7 7 7".split(" ")
    const actual = fifteenPoints(cards)
    const expected = 8
    expect(actual).toEqual(expected)
  })
})
