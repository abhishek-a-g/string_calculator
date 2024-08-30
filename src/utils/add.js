export const add = (numbersString) => {
    // Initialize the variables
    let delimiter = ",";
    let input = numbersString.trim();
    let result = {
        outputType: "success",
        output: 0
    }

    // Check if the user has provided a custom delimiter
    if (input.startsWith("//")) {
        // Extract the delimiter
        let tmp = input.split("\n");
        // console.log(tmp)
        delimiter = tmp[0].slice(2);
        input = tmp.slice(1).join("\n");
    }

    // check if the string is nothing but a bunch of delimiters
    if (new RegExp(`^\\s*(${delimiter}\\s*)*$`).test(input)) {
        return result;
    }

    // Start splitting
    let regexSplit = new RegExp(`\\s*${delimiter}\\s*|\\s*\\n+\\s*`, "g");
    let numbers = input.split(regexSplit);
    // console.log(numbers);

    for (let i = 0; i < numbers.length; i++) {
        let numStr = numbers[i];
        if (numStr !== "") {

            const regexNumCheck = new RegExp("^-?\\d+(\\.\\d+)?$");

            // Check if it is not a number
            if (!regexNumCheck.test(numStr)) {
                // Not a number
                return {
                    outputType: "error",
                    output: `Invalid input! ${numStr}`
                }
            } else {
                // it is a number
                // Check if it is an integer
                if (!numStr.includes(".")) {
                    let number = parseInt(numStr, 10);
                    // Check if it is truly a positive integer
                    if (number >= 0) {
                        result.output += number;
                    } else {
                        // Found negative integers
                        let negatives = numbers.slice(i).reduce((ac, e) => new RegExp(/^-\d+$/).test(e) ? ac + "," + e : ac);
                        // console.log("negatives", negatives);
                        return {
                            outputType: "error",
                            output: `negative numbers not allowed ${negatives}`
                        };
                    }
                } else {
                    return {
                        outputType: "error",
                        output: `Decimal numbers not allowed! ${numStr}`
                    };
                }
            }
        }
    }

    return result;
};
