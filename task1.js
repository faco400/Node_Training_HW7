function promiseAll(arrayPromises) {
  let results = []; // array to store values os resolved promises
  let completedPromises = 0; // counter of completed Promises

  return new Promise(function(myResolve,myReject) {
    arrayPromises.forEach((element,index) => {
      element.then(result => {
        results[index] = result;
        completedPromises++;
        if(completedPromises === arrayPromises.length)
          myResolve(results);
      }).catch(error => {
        myReject(error);
      })
    });
  });
}

const promises = [
  Promise.resolve(1),
  Promise.resolve(2),
  Promise.resolve(3)
];

promiseAll(promises)
  .then(results => {
    console.log("All promises resolved:", results); // Expected: [1, 2, 3]
  })
  .catch(error => {
    console.error("At least one promise rejected:", error);
  });