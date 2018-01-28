import runPoints from "./runPoints"

describe("runPoints", () => {
  it("counts 5 for a run of 5", () => {
    const cards = "8 6 7 5 9".split(" ")
    const actual = runPoints(cards)
    const expected = 5
    expect(actual).toEqual(expected)
  })

  it("counts 4 for a run of 4", () => {
    const cards = "8 6 7 5 2".split(" ")
    const actual = runPoints(cards)
    const expected = 4
    expect(actual).toEqual(expected)
  })

  it("counts 3 for a run of 3", () => {
    const cards = "3 6 7 5 2".split(" ")
    const actual = runPoints(cards)
    const expected = 3
    expect(actual).toEqual(expected)
  })

  it("counts 0 for a run of 2", () => {
    const cards = "3 10 7 5 2".split(" ")
    const actual = runPoints(cards)
    const expected = 0
    expect(actual).toEqual(expected)
  })
})
