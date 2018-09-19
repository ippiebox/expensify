// SET_TEXT_FILTER
export const setTextFilter = (filter_text='') => ({
  type: 'SET_TEXT_FILTER',
  filter_text
})

// SORT_BY_DATE
export const sortByDate = () => ({
  type: 'SORT_BY_DATE'
});

// SORT_BY_AMOUNT
export const sortByAmount = () => ({
  type: 'SORT_BY_AMOUNT'
});

// SET_START_DATE
export const setStartDate = (sDate = undefined) => ({
  type: 'SET_START_DATE',
  sDate
});

// SET_END_DATE
export const setEndDate = (eDate = undefined) => ({
  type: 'SET_END_DATE',
  eDate
});
