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

try {
  // 1. User variable is scoped to the try block and cannot be accessed outside of it!
  const user = await getUser(1);
  // Lots of code that users the user
  console.log(usr); // 2. Attempting to log 'usr' (which is undefined) will cause a ReferenceError and trigger the catch block,
  // even though id !== 2
} catch (error) {
  console.log("There was an error");
}

export {};
