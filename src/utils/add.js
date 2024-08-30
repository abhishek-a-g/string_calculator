export const add = (numbersString) => {
    // Initialize the variables
    let delimiter = ",";
    let input = numbersString;
    let result = 0;

    // Check if the user has provided a custom delimiter
    if (numbersString.startsWith("//")) {
        // Extract the delimiter
        let tmp = numbersString.split("\n");
        delimiter = tmp[0].slice(2);
        input = tmp[1];
    }

    // check if the string is nothing but a bunch of delimiters
    if (new RegExp(`^\\s*(${delimiter}\\s*)*$`).test(input)) {
        return result;
    }

    // Start splitting
    let regex = new RegExp(`\\s*${delimiter}\\s*|\\s*\\n+\\s*`, "g");
    let numbers = input.split(regex);
    // console.log(numbers);

    for (let i = 0; i < numbers.length; i++) {
        let e = numbers[i];
        let number = parseInt(e);

        // Check if it is a number
        if (isNaN(number)) {
            return "NaN";
        } else {
            // Check if it is an integer
            if (Number.isInteger(number)) {
                // Check if it is truly a positive integer
                if (number >= 0) {
                    result += number;
                } else {
                    // Found negative integers
                    let negatives = numbers.slice(i).reduce((ac, e) => new RegExp(/^-\d+$/).test(e) ? ac + "," + e : ac);
                    // console.log("negatives", negatives);
                    return `negative numbers not allowed ${negatives}`;
                }
            } else {
                return "Found numbers other than integers!";
            }
        }
    }

    return result;
};
