import * as Immutable from 'seamless-immutable';

export const Days = Immutable.from({
  MONDAY: 'Monday of the Dead',
  TUESDAY: 'True Story Tuesday',
  WEDNESDAY: 'Wind-Up Wednesday',
  THURSDAY: 'Thursday',
  FRIDAY: 'Facepaint Friday',
  SATURDAY: 'Saturday',
  SUNDAY: 'Sunday',
  HALLOWEEN: 'Happy Halloween 🎃'
});

export const Find = (source, field, target) => {
  return source.find(item => {
    return item[field] === target;
  });
};

export const SupportedProviders = Immutable.from([8, 9, 10, 15, 2, 207, 43, 37, 31, 99, 185]);