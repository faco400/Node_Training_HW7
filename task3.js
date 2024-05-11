function chainPromises(promiseFunctions) {
  let chain = Promise.resolve(); //Resolve promise with initial value undefined

  //for each function chain it so it performs sequentially
  promiseFunctions.forEach(element => {
    chain = chain.then(element);
  });

  //return chained Promise functions
  return chain;
}


function asyncFunction1() {
  return Promise.resolve("Result from asyncFunction1");
}

function asyncFunction2(data) {
  return Promise.resolve(data + " - Result from asyncFunction2");
}

function asyncFunction3(data) {
  return Promise.resolve(data + " - Result from asyncFunction3");
}

const functionsArray = [asyncFunction1, asyncFunction2, asyncFunction3];

chainPromises(functionsArray)
  .then(result => {
    console.log("Chained promise result:", result);
    // Expected: "Result from asyncFunction1 - Result from asyncFunction2 - Result from asyncFunction3"
  })
  .catch(error => {
    console.error("Chained promise error:", error);
  });