import { VENEZUELANSTATES } from './mock-data';
import islands from './svg/islands';
import others from './svg/others';

const LATENCY = 16

export function getAllStates(cb) {
  setTimeout(() => {
    cb(VENEZUELANSTATES)
  }, LATENCY)
}

export function getSVGIslands(cb) {
  setTimeout(() => {
    cb(islands)
  }, LATENCY)
}

export function getSVGOthers(cb) {
  setTimeout(() => {
    cb(others)
  }, LATENCY)
}
