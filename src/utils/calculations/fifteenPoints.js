import {
  __,
  curry,
  concat,
  equals,
  filter,
  length,
  map,
  multiply,
  pipe,
  reduce,
  sum,
  values,
} from "ramda"
import { kCombinations } from "./utils"

const combinationKs = [2, 3, 4, 5]

const mapNumber = collection => map(Number, collection)
const getCombinations = ([cards, k]) =>
  pipe(mapNumber, curry(kCombinations)(__, k))(cards)

const combinationsReducer = cards => [
  (acc, k) => pipe(getCombinations, concat(acc))([cards, k]),
  [],
]

const sumFifteen = set => equals(sum(set), 15)

const fifteenPoints = cards =>
  pipe(
    reduce(...combinationsReducer(cards)),
    filter(sumFifteen),
    length,
    multiply(2),
  )(combinationKs)

export default fifteenPoints
