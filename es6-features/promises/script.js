// const userLeft = false;
// const userWatchingCatMeme = false;

// function watchTutorialCallback(callback, errorCallback) {
//   if (userLeft) {
//     errorCallback({
//       name: "User Left",
//       message: ":(",
//     });
//   } else if (userWatchingCatMeme) {
//     errorCallback({
//       name: "User Watching Cat Meme",
//       message: "WebDevSimplified < Cat",
//     });
//   } else {
//     callback("Thumbs up and Subscribe");
//   }
// }

// watchTutorialCallback(
//   (message) => {
//     console.log("Success: " + message);
//   },
//   (error) => {
//     console.log(error.name + " " + error.message);
//   }
// );

// function watchTutorialPromise() {
//   return new Promise((resolve, reject) => {
//     if (userLeft) {
//       reject({
//         name: "User Left",
//         message: ":(",
//       });
//     } else if (userWatchingCatMeme) {
//       reject({
//         name: "User Watching Cat Meme",
//         message: "WebDevSimplified < Cat",
//       });
//     } else {
//       resolve("Thumbs up and Subscribe");
//     }
//   });
// }

// watchTutorialPromise()
//   .then((message) => {
//     console.log("Success: " + message);
//   })
//   .catch((error) => {
//     console.log(error.name + " " + error.message);
//   });

const recordVideoOne = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Video 1 Recorded");
  }, 1500);
});

const recordVideoTwo = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("Video 2 Recorded");
  }, 1750);
});

const recordVideoThree = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("Video 3 Recorded");
  }, 2000);
});

// Promise.race([recordVideoOne, recordVideoTwo, recordVideoThree]).then(
//   (message) => {
//     console.log(message);
//   }
// );

// Promise.all([recordVideoOne, recordVideoTwo, recordVideoThree]).then(
//   (messages) => {
//     console.log(messages);
//   }
// );

// Promise.all([recordVideoOne, recordVideoTwo, recordVideoThree])
//   .then((messages) => {
//     console.log(messages);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

Promise.allSettled([recordVideoOne, recordVideoTwo, recordVideoThree]).then(
  (results) => {
    results.forEach((result) => {
      // Can be modified as needed
      if (result.status === "fulfilled") {
        // fulfilled => value
        console.log(result.value);
      } else {
        // rejected => reason
        console.log("Error: ", result.reason);
      }
    });
  }
);
