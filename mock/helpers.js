const faker = require('faker');
const randomInt = require('random-int');

module.exports = {
    /**
     * Generates an array of filled with result of function.
     * @param  {function} generator Function to generate an element for the array.
     * @param  {number} min Minimum length of array, inclusive. (default 1)
     * @param  {number} max Maximum length of array, inclusive. (default 5)
     * @param  {...*} args Arguments to pass to generator (optional)
     */
    generateArray: (generator, min = 1, max = 5, ...args) =>
        new Array(randomInt(min, max))
            .fill(null)
            .map(generator.bind(null, ...args)),

    /**
     * Generates a pair of random sequential dates.
     * @param  {boolean} allowNullEndDate If true then the second date may be null. (default true)
     */
    randomDateRange: (allowNullEndDate = true) => {
        const startDate = new Date(faker.date.past(20));
        const endDate = allowNullEndDate && Math.random() < 0.5 ? null
            : new Date(startDate.getTime() + Math.random() * (Date.now() - startDate.getTime()));
        return [startDate, endDate];
    },

    /**
     * Generates a pair of random increasing hourly pay amounts.
     * @param  {boolean} useSalary Generate salary amounts instead of hourly (default false)
     */
    randomPayRange: (useSalary = false) => {
        const startPay = faker.finance.amount(useSalary ? 20000 : 7, useSalary ? 500000 : 20, useSalary ? 0 : 2, '$');
        const endPay = faker.finance.amount(startPay.replace('$', ''), useSalary ? 1000000 : 40, useSalary ? 0 : 2, '$');
        return [startPay, endPay];
    },
};
