// Create a Promise
const myPromise = new Promise((resolve, reject) => {

    let condition = true;   

    setTimeout(() => {

        if (condition) {
            resolve(" Operation completed after 2 seconds!");
        } else {
            reject(" Error: Condition failed!");
        }

    }, 2000);  

});


myPromise
    .then((message) => {
        console.log(message);
    })
    .catch((error) => {
        console.log(error);
    });
