import { countBy, identity, filter, pipe, sum, values } from "ramda"
import { greaterThan } from "./utils"

const flushPoints = (suits, crib = false) =>
  pipe(countBy(identity), filter(greaterThan(crib ? 4 : 3)), values, sum)(suits)

export default flushPoints
