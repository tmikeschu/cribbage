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
} from "ramda"
import { greaterThanOne } from "./utils"

const nextDiff = (a, i, o) => subtract(a, o[add(i, 1)])

const chunk = predicate => (acc, el) => {
  if (predicate(el)) {
    const lastIndex = subtract(length(acc), 1)
    return [slice(0, lastIndex, acc), concat([el], acc[lastIndex])]
  }
  return [...acc, []]
}
const groupRuns = [chunk(equals(-1)), [[]]]

const runPoints = cards =>
  pipe(
    sort(subtract),
    addIndex(map)(nextDiff),
    filter(identity),
    reduce(...groupRuns),
    map(length),
    find(greaterThanOne),
    add(1),
  )(cards) || 0

export default runPoints
