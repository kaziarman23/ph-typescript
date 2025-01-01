{
  // Task 4
  // Create a TypeScript function called countWordOccurrences that accepts a sentence (string) and a word (string). The function should return the number of times the word appears in the sentence, ignoring case. Use the simple sentence without punctuation as input.

  const countWordOccurrences = (line: string, word: string) => {
    const fullLine = line.toLocaleLowerCase();
    const targetWord = word.toLocaleLowerCase();

    const words = fullLine.split(/\b/); // Split by word boundaries

    const total = words.filter((word) => word === targetWord);

    console.log(
      total.length > 0
        ? `Found this word ${word} in this line: ${line} | for ${total.length} times`
        : `Can not Found this word ${word} in this line: ${line}`
    );
  };

  countWordOccurrences(
    "this is My Life. And i love typescript.typescript is awesome",
    "TypeScript"
  );

  // Scope End
}
