import {
  concat,
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
const getCombinations = (cards, k) => kCombinations(mapNumber(cards), k)
const combinationsReducer = cards => [
  (acc, k) => acc.concat(getCombinations(cards, k)),
  [],
]

const sumFifteen = set => sum(set) === 15

const fifteenPoints = cards =>
  pipe(
    reduce(...combinationsReducer(cards)),
    filter(sumFifteen),
    length,
    multiply(2),
  )(combinationKs)

export default fifteenPoints
