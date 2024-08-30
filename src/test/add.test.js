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
        output: "negative numbers not allowed: -2"
    },
    {
        input: " 1,2,-2,-3",
        output: "negative numbers not allowed: -2,-3"
    }
];