import {
  __,
  add,
  countBy,
  divide,
  equals,
  filter,
  identity,
  map,
  multiply,
  pipe,
  subtract,
  sum,
  uncurryN,
  values,
} from "ramda"
import { combinations, max as MAX, min as MIN } from "mathjs"

const greaterThan = x => y => y > x
const greaterThanOne = greaterThan(1)
const pairCombinations = x => combinations(x, 2)
const double = multiply(2)

export const pairPoints = cards =>
  pipe(
    countBy(identity),
    filter(greaterThanOne),
    map(pairCombinations),
    values,
    map(double),
    sum,
  )(cards)

const sequenceSum = ([x, y]) =>
  pipe(
    add(1),
    multiply(y),
    divide(__, 2),
    subtract(__, pipe(subtract(__, 1), multiply(x), divide(__, 2))(x)),
  )(y)

const minMax = set => [MIN(set), MAX(set)]
const isRun = cards =>
  pipe(minMax, sequenceSum, subtract(__, sum(cards)), equals(0))(cards)

export const runPoints = cards => {
  const sorted = cards.slice(0).sort((a, b) => a - b)
  if (isRun(sorted)) {
    return sorted.length
  }
}
