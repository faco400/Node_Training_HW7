function promisify(callback) {
  // return function that returns a promise
  return function (arg) {
    return new Promise(function(myResolve,myReject) {
      // passing arg to callback, if returns error reject it, if returns a result, resolve it
      callback(arg, (error, result) => {
        if(error){
          myReject(error);
        } else if (result) {
          myResolve(result);
        }
      });
    })
  }
}

function callbackStyleFunction(value, callback) {
  setTimeout(() => {
    if (value > 0) {
      callback(null, value * 2);
    } else {
      callback("Invalid value", null);
    }
  }, 1000);
}

const promisedFunction = promisify(callbackStyleFunction);

promisedFunction(3)
  .then(result => {
    console.log("Promised function result:", result); // Expected: 6
  })
  .catch(error => {
    console.error("Promised function error:", error);
  });