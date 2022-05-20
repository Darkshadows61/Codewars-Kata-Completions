//eloquent JS Chap 4 Example 4 Deep Comparison
const obj1 = {
    a: 1,
    b: 'got item',
    }
    const obj2 = {
      a: 1,
      b: 'got item',
    }
    const obj3 = {
      a: 2,
      b: 'got item',
    }
    const obj4 = {
      a: 1,
      b: 'got items'
    }
    deepEqual = (x,y) => {
      if (x.a === y.a) {
    return "True"
      } else if (x.a != y.a) {
        return "False"
      } else if (x.b === y.b) {
        return "True"
      } else if (x.b != y.b) {
        return "False"
      } else {
        return null
      }
    }