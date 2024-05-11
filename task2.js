function promiseAllSettled(arrayPromises) {
  let results = []; // array to store values os resolved promises
  let settledPromises = 0; // counter of settled Promises

  return new Promise(function(myResolve) {
    arrayPromises.forEach((element,index) => {
      element.then(result =>{
        results[index] = {status: 'fulfilled', value: result};
      }).catch(error => {
        results[index] = {status: 'rejected', reason: error};
      }).finally(() => {
        settledPromises++;
        if(settledPromises === arrayPromises.length)
          myResolve(results);
      });
    });
  });

}


const promises = [
  Promise.resolve(1),
  Promise.reject("Error occurred"),
  Promise.resolve(3)
];

promiseAllSettled(promises)
  .then(results => {
    console.log("All promises settled:", results);
    // Expected: [{ status: 'fulfilled', value: 1 },
    //            { status: 'rejected', reason: 'Error occurred' },
    //            { status: 'fulfilled', value: 3 }]
  });