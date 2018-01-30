import { countBy, identity, filter, pipe, sum, values } from "ramda"
import { greaterThan } from "./utils"

const greaterThanThree = greaterThan(3)
const greaterThanFour = greaterThan(4)

const flushPoints = (suits, crib = false) =>
  pipe(
    countBy(identity),
    filter(crib ? greaterThanFour : greaterThanThree),
    values,
    sum,
  )(suits)

export default flushPoints
