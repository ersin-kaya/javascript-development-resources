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

const user = await getUser(1);

// Lots of code that users the user
console.log(user);

export {};
