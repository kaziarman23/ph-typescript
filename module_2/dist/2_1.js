"use strict";
{
    const kgToGram = (value) => {
        if (typeof value === "string") {
            return parseInt(value) * 1000;
        }
        else if (typeof value === "number") {
            return value * 1000;
        }
        else {
            return "Invaild Input";
        }
    };
    const result_1 = kgToGram("1");
    const result_2 = kgToGram(10);
    console.log({ result_1, result_2 });
    console.log(typeof result_1);
    console.log(typeof result_2);
    // Scope Ending
}
