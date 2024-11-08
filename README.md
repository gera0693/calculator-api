# Calculator API

This is a simple calculator API that supports basic arithmetic operations. It's built using Node.js and Express.js.

## Endpoints

### POST /calculate

Accepts JSON data with the following properties:

- `num1`: a number
- `num2`: a number
- `operation`: a string that can be one of `+`, `-`, `*`, or `/`

Returns a JSON object with the following properties:

- `operation`: the operation that was performed
- `input`: an object with the input values `num1` and `num2`
- `result`: the result of the operation
- `timestamp`: the time the operation was performed

If the input is invalid, it returns a 400 status code with an error message.

## Usage

1. Clone the repository.
2. Run `npm install` to install the dependencies.
3. Run `npm start` to start the server.
4. Use a tool like Postman or curl to send POST requests to `http://localhost:3000/calculate`.

## Running Tests

To run the tests for this API:

1. Ensure the dependencies are installed by running `npm install`.
2. To run the tests, use the following command:

   ```bash
   npm test

## Error Handling

- If the input is invalid, it returns a 400 status code with an error message.
- If division by zero is attempted, it returns a 400 status code with an error message.

## Input Validation

- `num1` and `num2` must be numbers.
- `operation` must be one of `+`, `-`, `*`, or `/`.

## Dependencies

- Node.js
- Express.js

