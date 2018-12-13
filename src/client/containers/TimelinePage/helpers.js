import { compact, flatten, chunk, range } from 'lodash';
import moment from 'moment';
import titleCase from 'title-case';

// Color crap
const COLORS = [ 'FF005D', '0085B6', '0BB4C1', '00D49D', 'FEDF03', '233D4D', 'FE7F2D', 'FCCA46', 'A1C181', '579C87' ];
let color = -1;
const nextColor = () => COLORS[(++color) % COLORS.length];
const hexToRgb = hex => {
    const v = parseInt(hex, 16);
    const r = (v >> 16) & 255;
    const g = (v >> 8) & 255;
    const b = v & 255;
    return [r, g, b];
};
const colourIsLight = (r, g, b) => {
    const a = 1 - (((0.299 * r) + (0.587 * g) + (0.114 * b)) / 255);
    return (a < 0.5);
};

export const getNonCollidingSubsets = entities => {
    // TODO Create the minimum number of arrays to contain all events of this type so that no events in the same array overlap
    return chunk(entities);
};

const startDate = entity => entity.startDate || entity.acquireDate || entity.endDate || entity.expireDate;
const endDate = entity => entity.endDate || entity.expireDate || entity.startDate || entity.acquireDate;

export const getMaximumDate = (entities, findEarliest = true) => {
    const lists = Object.values(entities).map(entityType => entityType.list);
    const getDate = findEarliest ? startDate : endDate;

    // Get the maximum date of an array of objects that have startDate/acquireDate or endDate/expireDate properties
    const isNewBest = (current, oldBest) => findEarliest ? current.isBefore(oldBest) : current.isSameOrAfter(oldBest);

    // Takes in array of entities, returns one with maximum date
    const getBestOfArray = arr => {
        let bestEntity;
        arr.forEach(entity => {
            const curDate = getDate(entity);
            if (curDate && (!bestEntity || (isNewBest(moment(curDate), moment(getDate(bestEntity)))))) {
                bestEntity = entity;
            }
        });
        return bestEntity;
    };

    // Get the maximum date for each type of event (e.g. earliest position, earliest project...)
    // Then return the maximum of those
    // ...lol sorry about next line
    return moment(getDate(
        getBestOfArray(
            compact(flatten(
                lists.map(getBestOfArray)
            ))
        )
    ));
};

export const buildTimebar = (startYear, endYear) => {
    // Create array of all years to show
    const yearRange = range(startYear, endYear);
    return [
        {
            id: 'years',
            title: '',
            cells: yearRange.map(year => ({
                id: `timeline-year-${year}`,
                title: String(year),
                start: new Date(`${year}-01-01`),
                end: new Date(`${year}-12-31`),
            })),
            style: {},
        },
    // {
    //   id: 'months',
    //   title: 'Months',
    //   cells: yearRange.reduce((acc, year) => acc.concat(
    //     moment.monthsShort().map(month => {
    //       const start = moment(`${year}-${month}`, 'YYYY-MMM');
    //       return ({
    //         id: `timeline-month-${year}-${month}`,
    //         title: month,
    //         start: start.toDate(),
    //         end: start.add({ months: 1}).toDate(),
    //       })
    //     })
    //   ), []),
    //   useAsGrid: true,
    //   style: {},
    // },
    ];
};

export const buildElement = (entityType, startYear, endYear, entity) => {
    const bgColor = nextColor();
    const color = colourIsLight(...hexToRgb(bgColor)) ? '#000000' : '#ffffff';
    return {
        id: `${entityType}-track-element-${entity.id}`,
        title: entity.name || entity.title,
        start: new Date(entity.startDate || entity.acquireDate || `${startYear}-01-01`),
        end: new Date(entity.endDate || entity.expireDate || `${endYear}-12-31`),
        style: {
            backgroundColor: `#${bgColor}`,
            color,
            borderRadius: '4px',
            boxShadow: '1px 1px 0px rgba(0, 0, 0, 0.25)',
            textTransform: 'capitalize',
        },
    };
};

export const buildTrack = (entityType, entities, index, startYear, endYear) => {
    return (
        {
            id: `${entityType}-track-${index}`,
            title: titleCase(entityType),
            elements: entities.map(buildElement.bind(null, entityType, startYear, endYear)),
            hasButton: false,
            isOpen: true,
        }
    );
};
