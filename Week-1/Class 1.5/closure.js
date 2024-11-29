function add() {
  let counter = 0;
  console.log(counter)  // 0

  function plus() {
      counter += 1
      var a=9
      console.log(counter)  // 1 
  }

  plus();  

  console.log(counter)   // 1 
  console.log(a) // shows error a is not defined outside plus() no matter of var, let or const
}

add()

// A closure is the combination of a function bundled together (enclosed) with references to its surrounding state 
// (the lexical environment). In other words, a closure gives you access to an outer function's scope from an inner 
// function. In JavaScript, closures are created every time a function is created, at function creation time.