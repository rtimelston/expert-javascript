export const describeHoisting = () => {
  console.log(`Hoisting vs. Execution`)
  console.log(`Hoisting runs first, then execution`)
  console.log(`var name1 = 'foo' // at hoisting allocates space for variable name1`)
  console.log(`var name1 = 'foo' // at execution assigns value 'foo' to variable name1`)

  console.log(`function getName() { console.log(name) } // at hoisting loads getName function into memory`)
  console.log(`function getName() { console.log(name) } // at execution does nothing because it's not called here`)

  console.log(`getName() // at hoisting is no-op`)
  console.log(`getName() // at execution invokes the getName function`)

  console.log(`Trying to print bar now.`)
  // console.log(`This will error out because bar will not be initialized until after this line of code: ${bar ? bar : undefined}`)
  foo();

  const bar = 'gold'
  function foo() {
    console.log(`Calling foo() now. Will work because during hoisting 'function foo()...' was loaded into memory.`)
  }

  console.log(`Printing bar again.`)
  console.log(`It will print 'gold' because during execution the value was set to the variable that was allocated during hoisting: ${bar}`)

  // fooConst()
  // const fooConst = () => console.log(`This will error out because with 'const fooConst = () => {...}' syntax does not load the function into memory`)

  const barConst = () => console.log(`This will succeed because during execution barConst is assigned the function value and only then does it get called.`)

  barConst()
}