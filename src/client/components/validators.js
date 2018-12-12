
export const alwaysTrue = value => true;

export const lengthBetween = (minLength, maxLength, value) => value && value.length >= minLength && value.length <= maxLength;

export const startDate = (endDate, value) => {
    // TODO: return true if startDate is before endDate (or endDate is null/empty)
    return true;
};
