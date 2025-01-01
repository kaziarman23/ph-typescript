{
  // Task Two
  // Create a TypeScript function removeDuplicates that accepts an array of numbers and returns a new array with duplicates removed. Preserve the original order of elements.

  const removeDuplicates = (...params: number[]) => {
    const array = params;

    return array.filter((item, index) => array.indexOf(item) === index);
  };

  console.log(removeDuplicates(10, 20, 30, 40, 50, 20, 30, 40));

  // Scope End
}
