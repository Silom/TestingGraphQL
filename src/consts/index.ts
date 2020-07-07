// TODO the consts files can be transformed into typescript, but before that cypress needs to lean TS
import { default as routes } from './Routes.js'
import { default as testIds } from './TestIds.js'

interface RouteList {
  [key: string]: {
    url: string
  }
}

interface TestIdEntry {
  [key: string]: object
}

const Routes: RouteList = routes
const TestIds: TestIdEntry = testIds

export {
  TestIds,
  Routes
}

