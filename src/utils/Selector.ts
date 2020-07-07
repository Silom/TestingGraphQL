import { Routes } from '../consts'

const selectUrl = (areaName: string) => {
  return Routes[areaName] ? Routes[areaName].url : null
}

export { selectUrl }
