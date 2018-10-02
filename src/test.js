
const compose = (...fns) =>
(arg) =>
fns.reduce(
(composed, f) => f(composed),
arg
)

a = (a) => { console.log(a)
return(a) }

b = (b) => { console.log(b)
return(b)}

const both = compose(
  a,
  b,
  a,
  b
)

both('abc')