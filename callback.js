function resolvedPromise() {
  return  new Promise((resolve) =>{
    setTimeout(() => {
      resolve({'message':'delayed success!'})
    }, 500)
  })
}

function rejectedPromise() {
  return  new Promise((resolve, reject) =>{
    setTimeout(() => {
      reject({'error':'delayed exception!'})
    }, 500)
  })
}
module.exports = {resolvedPromise, rejectedPromise};

resolvedPromise().then((result) => console.log(result));
rejectedPromise().catch((error) => console.log(error));