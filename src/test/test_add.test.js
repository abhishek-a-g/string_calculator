import { test, expect } from 'vitest';
import * as addJs from '../utils/add.js'


export const test_data = [
    {
        input: "",
        output: 0
    },
    {
        input: " ",
        output: 0
    },
    {
        input: ",",
        output: 0
    },
    {
        input: ", ",
        output: 0
    },
    {
        input: " ,",
        output: 0
    },
    {
        input: ",,",
        output: 0
    },
    {
        input: "$",
        output: "Invalid input! $"
    },
    {
        input: "a",
        output: "Invalid input! a"
    },
    {
        input: "-1",
        output: "negative numbers not allowed -1"
    },
    {
        input: "1.2",
        output: "Decimal numbers not allowed! 1.2"
    },
    {
        input: "1.23",
        output: "Decimal numbers not allowed! 1.23"
    },
    {
        input: ",1",
        output: 1
    },
    {
        input: "1,",
        output: 1
    },
    {
        input: "1,,",
        output: 1
    },
    {
        input: " 1",
        output: 1
    },
    {
        input: "1",
        output: 1
    },
    {
        input: ",1,5",
        output: 6
    },
    {
        input: "1,5,",
        output: 6
    },
    {
        input: ",1,5,",
        output: 6
    },
    {
        input: "1,a",
        output: "Invalid input! a"
    },
    {
        input: "1;5",
        output: "Invalid input! 1;5"
    },
    {
        input: "1, 5",
        output: 6
    },
    {
        input: "1,5 ",
        output: 6
    },
    {
        input: " 1,5",
        output: 6
    },
    {
        input: "1,5",
        output: 6
    },
    {
        input: "1,5,8,5,7,5 34,45,34,576,576",
        output: "Invalid input! 5 34"
    },
    {
        input: "1,5,8,5,7,534,45,34,576,576",
        output: 1791
    },
    {
        input: "\n",
        output: 0
    },
    {
        input: "\n\n",
        output: 0
    },
    {
        input: "1\n\n2,3",
        output: 6
    },
    {
        input: "\n1\n2,3",
        output: 6
    },
    {
        input: "\n\n1\n2,3",
        output: 6
    },
    {
        input: "1\n2,3\n",
        output: 6
    },
    {
        input: "1\n2,3\n\n",
        output: 6
    },
    {
        input: "1\n2\n3",
        output: 6
    },
    {
        input: "1\n,2\n3",
        output: 6
    },
    {
        input: "1\n2,-3",
        output: "negative numbers not allowed -3"
    },
    {
        input: "-1\n2,3",
        output: "negative numbers not allowed -1"
    },
    {
        input: "1,\n2,3",
        output: 6
    },
    {
        input: "1;\n2,3",
        output: "Invalid input! 1;"
    },
    {
        input: "1\n2,3",
        output: 6
    },
    {
        input: "//;\n1;2",
        output: 3
    },
    {
        input: ",//;\n1;2",
        output: "Invalid input! //;"
    },
    {
        input: ";//;\n1;2",
        output: "Invalid input! ;//;"
    },
    {
        input: "//;\n1\n2",
        output: 3
    },
    {
        input: "// \n1 2",
        output: 3
    },
    {
        input: "// \n1,2",
        output: "Invalid input! 1,2"
    },
    {
        input: "// \n1;2",
        output: "Invalid input! 1;2"
    },
    {
        input: " //;\n1;2",
        output: 3
    },
    {
        input: " //; \n1;2",
        output: "Invalid input! 1;2"
    },
    {
        input: " //; \n1; 2",
        output: 3
    },
    {
        input: "//helen\n1;2",
        output: "Invalid input! 1;2"
    },
    {
        input: "//helen\n1helen2",
        output: 3
    },
    {
        input: "//;\n1 2",
        output: "Invalid input! 1 2"
    },
    {
        input: "// \n1 2",
        output: 3
    },
    {
        input: "//-\n1-2",
        output: 3
    },
    {
        input: "//;\n1;2",
        output: 3
    },
    {
        input: "1,2,-2",
        output: "negative numbers not allowed -2"
    },
    {
        input: "1,2,--2",
        output: "Invalid input! --2"
    },
    {
        input: "1,2;-2",
        output: "Invalid input! 2;-2"
    },
    {
        input: "1,-2;2",
        output: "Invalid input! -2;2"
    },
    {
        input: "1,2,a,-2",
        output: "Invalid input! a"
    },
    {
        input: "1,2,-2,a",
        output: "negative numbers not allowed -2"
    },
    {
        input: "1,2,-2,-3",
        output: "negative numbers not allowed -2,-3"
    }
]

// export const test_add = () => {
//     test_data.forEach((e, i) => {
//         let result = addJs.add(e.input)
//         result === e.output
//             ? console.log(`Test Case ${i + 1} Passed`)
//             : console.log(`Test Case ${i + 1} Failed - ${JSON.stringify({
//                 ...e,
//                 "result": result,
//             }, null, 2)}`);
//     });
// };

test_data.forEach((e, i) => {
    test(`Test Case ${i + 1}`, () => {
        const result = addJs.add(e.input).output;
        expect(result).toEqual(e.output);
    });
});