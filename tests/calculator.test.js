const request = require('supertest');
const app = require('../index'); 

describe('Calculator API', () => {
    it('should add two numbers', async () => {
        const response = await request(app)
            .post('/calculate')
            .send({ num1: 5, num2: 3, operation: '+' });

        expect(response.status).toBe(200);
        expect(response.body.result).toBe(8);
        expect(response.body.operation).toBe('+');
        expect(response.body.input.num1).toBe(5);
        expect(response.body.input.num2).toBe(3);
    });

    it('should subtract two numbers', async () => {
        const response = await request(app)
            .post('/calculate')
            .send({ num1: 5, num2: 3, operation: '-' });

        expect(response.status).toBe(200);
        expect(response.body.result).toBe(2);
        expect(response.body.operation).toBe('-');
    });

    it('should multiply two numbers', async () => {
        const response = await request(app)
            .post('/calculate')
            .send({ num1: 5, num2: 3, operation: '*' });

        expect(response.status).toBe(200);
        expect(response.body.result).toBe(15);
        expect(response.body.operation).toBe('*');
    });

    it('should divide two numbers', async () => {
        const response = await request(app)
            .post('/calculate')
            .send({ num1: 6, num2: 3, operation: '/' });

        expect(response.status).toBe(200);
        expect(response.body.result).toBe(2);
        expect(response.body.operation).toBe('/');
    });

    it('should return error for division by zero', async () => {
        const response = await request(app)
            .post('/calculate')
            .send({ num1: 6, num2: 0, operation: '/' });

        expect(response.status).toBe(400);
        expect(response.body.error).toBe('Division by zero is not allowed');
    });

    it('should return error for invalid operation', async () => {
        const response = await request(app)
            .post('/calculate')
            .send({ num1: 6, num2: 3, operation: '%' });

        expect(response.status).toBe(400);
        expect(response.body.error).toBe('Invalid operation: Supported operations are +, -, *, /');
    });

    it('should return error for invalid number input', async () => {
        const response = await request(app)
            .post('/calculate')
            .send({ num1: 'a', num2: 3, operation: '+' });

        expect(response.status).toBe(400);
        expect(response.body.error).toBe('Invalid input: Both num1 and num2 should be numbers');
    });
});
