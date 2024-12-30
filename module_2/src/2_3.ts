{
  // basic type defined
  //   const users: string[] = ["userOne", "userTwo", "userThree"];
  //   const userId: number[] = [1, 2, 3];
  //   const userPresent: boolean[] = [true, false, true];

  // generic type defined
  // we can use dynamic generic types

  type GenericType<T> = Array<T>;

  const users: GenericType<string> = ["userOne", "userTwo", "userThree"];
  const userId: GenericType<number> = [1, 2, 3];
  const userPresent: GenericType<boolean> = [true, false, true];

  console.log("users type: ",  users);
  console.log("userId type: ",  userId);
  console.log("users type: ",  userPresent);

}
