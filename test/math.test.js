// test/math.test.js
const { add, subtract } = require('../demo');

describe('Math Utility Functions', () => {
    let expect;

    before(async () => {
        // Dynamically import Chai
        const chai = await import('chai');
        expect = chai.expect;
    });

    it('should add two numbers correctly', () => {
        const result = add(2, 3);
        expect(result).to.equal(5);
    });

    it('should subtract two numbers correctly', () => {
        const result = subtract(5, 2);
        expect(result).to.equal(3);
    });
});
