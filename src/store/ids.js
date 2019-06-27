
export function maxId (allIds) {
  const numberPattern = /\d+/
  const ids = allIds.map(id => Number(id.match(numberPattern)[0]))
  return Math.max(ids)
}

let ppId = 1
let cId = 1
let pptId = 1
let itId = 1
let ctId = 1
let sbId = 1
let tId = 1

export const setPPid = id => ppId = id
export const nextPPid = () => `pp${++ppId}`

export const setCid = id => cId = id
export const nextCid = () => `c${++cId}`

export const setPPTid = id => pptId = id
export const nextPPTid = () => `ppt${++pptId}`

export const setITid = id => itId = id
export const nextITid = () => `it${++itId}`

export const setCTid = id => ctId = id
export const nextCTid = () => `ct${++ctId}`

export const setSBid = id => sbId = id
export const nextSBid = () => `sb${++sbId}`

export const setTid = id => tId = id
export const nextTid = () => `t${++tId}`



