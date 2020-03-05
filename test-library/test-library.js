const describe = (desc, fn) => {
  console.log(desc)
  fn()
}

const it = (msg, fn) => describe('  ' + msg, fn)

const matchers = (exp) => ({
  toBe: (assertion) => {
    if (exp === assertion) {
      console.log("Exp: " + exp)
      console.log("Assertion: " + assertion)
      console.log('%c    pass','color: #00ff00')
      return true
    } else {
      console.log("Exp: " + exp)
      console.log("Assertion: " + assertion)
      console.log('%c    fail','color:#ff0000')
      return false
    }
  },
  toBeInstanceOf: (assertion) => {
    if (typeof(exp) === typeof(assertion)) {
      console.log('%c    pass','color: #00ff00')
      return true
    } else {
      console.log('%c    fail','color:#ff0000')
      return false
    }
  }
})

const expect = (exp) => matchers(exp)

// function adder(a, b) {
//   return a + b 
// }

// describe('adder', () => {
//   it('adds two numbers', () => {
//     const result = adder(1, 2)
//     expect(result).toBe(3)
//   })
// })