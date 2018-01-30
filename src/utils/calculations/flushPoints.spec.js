import flushPoints from "./flushPoints"

describe("flushPoints", () => {
  it("counts 5 points for a flush of 5 suits", () => {
    const cards = "d d d d d".split(" ")
    const actual = flushPoints(cards)
    const expected = 5
    expect(actual).toEqual(expected)
  })

  it("counts 4 points for four of the same suit", () => {
    const cards = "d d d d c".split(" ")
    const actual = flushPoints(cards)
    const expected = 4
    expect(actual).toEqual(expected)
  })

  it("counts 0 points for four of the same suit if crib is true", () => {
    const cards = "d d d d c".split(" ")
    const actual = flushPoints(cards, true)
    const expected = 0
    expect(actual).toEqual(expected)
  })

  it("counts 0 points for three of the same suit", () => {
    const cards = "d d d c c".split(" ")
    const actual = flushPoints(cards)
    const expected = 0
    expect(actual).toEqual(expected)
  })
})
