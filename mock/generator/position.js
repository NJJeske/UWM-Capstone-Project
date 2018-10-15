const faker = require('faker');
const { randomDateRange, randomPayRange } = require('../helpers');

module.exports = () => {
    const [startDate, endDate] = randomDateRange();
    const useSalary = Math.random() < 0.5;
    const [startPay, endPay] = randomPayRange(useSalary);
    const payPeriod = useSalary ? 'Yearly' : 'Hourly';

    return {
        id: faker.random.uuid(),
        title: faker.name.jobTitle,
        startPay,
        endPay,
        payPeriod,
        startDate,
        endDate
    };
};
