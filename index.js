
const mixedArray = ['PIZZA', 10, true, 25, false, 'Wings'];
const lowerCaseWords = (arr) => {
    return new Promise((resolve, reject) => {
        if (arr.length > 0) {
            let result = arr.filter((word) => typeof word === 'string').map((word) => word.toLowerCase());
            resolve(result);
        } else {
            reject('Array is empty');
        }
    });
}
lowerCaseWords(mixedArray)
    .then((result) => console.log(result))
    .catch((error) => console.log(error));
