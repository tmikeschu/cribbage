import {
  __,
  add,
  addIndex,
  concat,
  countBy,
  divide,
  equals,
  filter,
  find,
  identity,
  length,
  map,
  multiply,
  pipe,
  reduce,
  slice,
  sort,
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

const nextDiff = (a, i, o) => subtract(a, o[add(i, 1)])
const chunk = predicate => (acc, el) => {
  if (predicate(el)) {
    return [
      slice(0, subtract(length(acc), 1), acc),
      concat([el], acc[subtract(length(acc), 1)]),
    ]
  }
  return [...acc, []]
}
const groupRuns = chunk(equals(-1))

export const runPoints = cards => {
  return (
    pipe(
      sort(subtract),
      addIndex(map)(nextDiff),
      filter(identity),
      reduce(groupRuns, [[]]),
      map(length),
      find(greaterThanOne),
      add(1),
    )(cards) || 0
  )
}
