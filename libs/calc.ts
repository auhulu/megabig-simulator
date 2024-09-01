export const calc = (entry) => {
    const lots: number[] = Array(240).fill(27754764)
    .concat(Array(5753).fill(300))
    .concat(Array(60411).fill(300))
    .concat(Array(362470).fill(300))
    .concat(Array(1359263).fill(300))
    .concat(Array(3262233).fill(300))
    .concat(Array(10660512).fill(0));
    const selectedLots = shuffle(lots).slice(0, entry)
    const result = Math.round((selectedLots.reduce((sum, val) => sum + val, 0) / entry - 300) * entry)
    return result
}

const shuffle = (array) => {
    const cloneArray = [...array];
    const result = cloneArray.reduce((_,cur,idx) => {
      let rand = Math.floor(Math.random() * (idx + 1));
      cloneArray[idx] = cloneArray[rand]
      cloneArray[rand] = cur;
      return cloneArray
    })
    return result;
}
  