# React + Vite

# String Calculator

A simple and interactive web application built with React, Vite, and Tailwind CSS that calculates the sum of numbers from a string input. This app supports custom delimiters and handles various input errors gracefully.

## Overview

The String Calculator application allows users to enter a string of numbers separated by delimiters (such as commas or custom delimiters). It then computes and displays the sum of these numbers. The app also provides error messages for invalid inputs like negative numbers or non-numeric characters.

## Features

- **Addition Calculation:** Computes the sum of numbers from a string input.
- **Custom Delimiters:** Users can specify custom delimiters by starting their input with `//` followed by the delimiter and a newline.
- **Error Handling:** Provides feedback for invalid inputs, including non-numeric characters, negative numbers, and decimals.
- **Responsive Design:** Uses Tailwind CSS to ensure the application works on all device sizes.
- **Testing:** Comprehensive test cases using Vitest to validate the functionality of the application.

## Demo

You can try the live demo of the String Calculator application [here](https://string-calculator-abhishek.netlify.app/).

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **Vite**: A build tool that provides a faster and leaner development experience.
- **Tailwind CSS**: A utility-first CSS framework for rapidly building custom designs.
- **Vitest**: A blazing fast unit test framework powered by Vite.

## Getting Started

Follow these instructions to set up the project locally on your machine.

### Prerequisites

Ensure you have the following installed:

- **Node.js** (version 16 or higher)
- **npm** (Node Package Manager)

### Installation

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/your-username/string-calculator.git
   cd string-calculator
   ```

2. **Install Dependencies:**

   ```bash
   npm install
   ```

### Running the Application

To start the application in development mode:

```bash
npm run dev
```

This command will start the development server and open the app in your default browser at `http://localhost:3000`.

### Running Tests

To run the test suite:

```bash
npm run test
```

This command will execute all the tests using Vitest and display the results in your terminal.

## Usage

1. Enter a string of numbers separated by commas or newlines in the input box.
2. Click the **Calculate Sum** button to compute the total.
3. If needed, specify a custom delimiter by starting your input with `//` followed by the delimiter and a newline (e.g., `//;\n1;2`).
4. Review the output and any error messages displayed.

## Contributing

Contributions are welcome! If you'd like to contribute to this project, please fork the repository and create a pull request with your changes.

1. Fork the Project.
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`).
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`).
4. Push to the Branch (`git push origin feature/AmazingFeature`).
5. Open a Pull Request.

---

Feel free to replace placeholders like `your-username` with actual values before using it in your GitHub repository.
