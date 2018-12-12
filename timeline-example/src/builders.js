import { fill, hexToRgb, colourIsLight, nextColor } from './utils'
import titleCase from 'title-case';
import { range } from 'lodash';
import moment from 'moment';

export const getMaximumDate = (events, findEarliest = true) => {
  // Get the maximum date of an array of objects that have startDate/acquireDate or endDate/expireDate properties
  const isNewBest = (current, oldBest) => findEarliest ? current.isBefore(oldBest) : current.isSameOrAfter(oldBest);
  const getBestOfArray = arr => arr.reduce((best, cur) => {
    const date = cur instanceof Date ? cur : (cur.startDate || cur.acquireDate);
    return (!best || (date && isNewBest(moment(date), moment(best)))) ? date : best;
  });
  // Get the maximum date for each type of event (e.g. earliest position, earliest project...)
  // Then return the maximum of those
  return moment(getBestOfArray(Object.values(events).map(getBestOfArray)));
}

export const buildTimebar = (startYear, endYear) => {
  // Create array of all years to show
  const yearRange = range(startYear, endYear);
  return [
    {
      id: 'years',
      title: 'Years',
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
  ]
};

export const buildElement = (entityType, entity) => {
  const bgColor = nextColor()
  const color = colourIsLight(...hexToRgb(bgColor)) ? '#000000' : '#ffffff'
  return {
      id: `${entityType}-track-element-${entity.id}`,
      title: entity.name || entity.title,
      start: new Date(entity.startDate || entity.acquireDate || -8640000000000000),
      end: new Date(entity.endDate || entity.expireDate || 8640000000000000),
      style: {
        backgroundColor: `#${bgColor}`,
        color,
        borderRadius: '4px',
        boxShadow: '1px 1px 0px rgba(0, 0, 0, 0.25)',
        textTransform: 'capitalize',
      },
  }
}

export const buildTrack = (entityType, entities, index) => {
  console.log(entities);
  return (
    {
      id: `${entityType}-track-${index}`,
      title: titleCase(entityType),
      elements: entities.map(buildElement.bind(null, entityType)),
      hasButton: false,
      isOpen: true,
    }
  )
}







