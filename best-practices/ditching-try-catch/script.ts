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

function catchError<T>(promise: Promise<T>): Promise<[undefined, T] | [Error]> {
  return promise
    .then((data) => {
      return [undefined, data] as [undefined, T];
    })
    .catch((error) => {
      return [error];
    });
}

const [error, user] = await catchError(getUser(1));

if (error) {
  console.log("There was an error", error.message);
} else {
  // Lots of code that users the user
  console.log(user);
}

export {};
