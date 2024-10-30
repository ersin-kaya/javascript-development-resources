function wait(duration: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, duration);
  });
}

async function getUser(id: number) {
  await wait(1000);
  if (id === 2) {
    throw new Error("404 - User does not exist");
  }

  return { id, name: "Kyle" };
}

let user;
try {
  user = await getUser(1);
} catch (error) {
  console.log("There was an error");
}

// Lots of code that users the user
console.log(usr); // error: Uncaught (in promise) ReferenceError: usr is not defined

user = 1; // that's going to redefine my user variable
// which is definitely not ideal
// so there's a lot of problems with try catch

export {};
