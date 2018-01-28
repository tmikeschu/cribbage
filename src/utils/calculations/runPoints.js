import {
  add,
  addIndex,
  concat,
  equals,
  filter,
  find,
  identity,
  length,
  map,
  pipe,
  reduce,
  slice,
  sort,
  subtract,
  values,
} from "ramda"

const greaterThan = x => y => y > x
const greaterThanOne = greaterThan(1)

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

const runPoints = cards =>
  pipe(
    sort(subtract),
    addIndex(map)(nextDiff),
    filter(identity),
    reduce(groupRuns, [[]]),
    map(length),
    find(greaterThanOne),
    add(1),
  )(cards) || 0

export default runPoints
