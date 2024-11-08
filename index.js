const express = require('express');
const app = express();
const PORT = 3000;
module.exports = app;

app.use(express.json());

app.post('/calculate', (req, res) => {
    const { num1, num2, operation } = req.body;

    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        return res.status(400).json({
            error: 'Invalid input: Both num1 and num2 should be numbers',
            timestamp: new Date().toISOString(),
        });
    }

    if (!['+', '-', '*', '/'].includes(operation)) {
        return res.status(400).json({
            error: 'Invalid operation: Supported operations are +, -, *, /',
            timestamp: new Date().toISOString(),
        });
    }

    let result;
    switch (operation) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            if (num2 === 0) {
                return res.status(400).json({
                    error: 'Division by zero is not allowed',
                    timestamp: new Date().toISOString(),
                });
            }
            result = num1 / num2;
            break;
        default:
            return res.status(400).json({
                error: 'Unsupported operation',
                timestamp: new Date().toISOString(),
            });
    }

    res.status(200).json({
        operation: operation,
        input: { num1, num2 },
        result: result,
        timestamp: new Date().toISOString(),
    });
});

app.listen(PORT, () => {
    console.log(`Calculator API running on http://localhost:${PORT}`);
});