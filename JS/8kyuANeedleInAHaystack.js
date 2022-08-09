function findNeedle(haystack) {
    let position = haystack.findIndex(e => e === 'needle')
    return `found the needle at position ${position}`
  }