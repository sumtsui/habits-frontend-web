import moment from 'moment';

export const getThisWeekData = record => {
  const lastMonday = moment().day(1).startOf('day');
  return (
    record
      .map(i => new Date(i))
      .filter(i => i > lastMonday)
      .map(i => {
        return new Date(i).getDay() === 0 ? 7 : new Date(i).getDay()
      })
  );
}