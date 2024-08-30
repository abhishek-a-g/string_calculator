import * as addJs from '../utils/add.js'


export const test_data = [
    {
        input: "",
        output: 0
    },
    {
        input: "1",
        output: 1
    },
    {
        input: "1,5",
        output: 6
    },
    {
        input: "1,5,3,5,7,534,45,34,576,576",
        output: 1786
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
        input: " 1,2,-2",
        output: "negative numbers not allowed -2"
    },
    {
        input: " 1,2,-2,-3",
        output: "negative numbers not allowed -2,-3"
    }
];

export const test_add = () => {
    test_data.forEach((e, i) => {
        let result = addJs.add(e.input) 
        result === e.output
            ? console.log(`Test Case ${i + 1} Passed`)
            : console.log(`Test Case ${i + 1} Failed - ${JSON.stringify({
                ...e,
                "result": result,
            }, null, 2)}`);
    });
};

test_add()