import {
  countBy,
  filter,
  identity,
  map,
  multiply,
  pipe,
  sum,
  values,
} from "ramda"
import { combinations } from "mathjs"

const greaterThan = x => y => y > x
const greaterThanOne = greaterThan(1)
const pairCombinations = x => combinations(x, 2)
const double = multiply(2)

const pairPoints = cards =>
  pipe(
    countBy(identity),
    filter(greaterThanOne),
    map(pairCombinations),
    values,
    map(double),
    sum,
  )(cards)

export default pairPoints
