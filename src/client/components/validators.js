
export const alwaysTrue = value => true;

export const lengthBetween = (minLength, maxLength, value) => value && value.length >= minLength && value.length <= maxLength;

export const startDate = (endDate, value) => {
    // TODO: return true if startDate is before endDate (or endDate is null/empty)
    return true;
};
export const notEmpty = (value) => value && value.length > 0;

export const isNumeric = (value) => value && !isNaN(value);

export const validEmail = (value) => {
    value && /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(value);
};
