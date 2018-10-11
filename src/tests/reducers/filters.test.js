import filtersReducer from '../../reducers/filters'
import moment from 'moment';

test('should setup default filter values', () => {
  const state = filtersReducer(undefined, { type: '@@INIT'})
  expect(state).toEqual({
    text: '',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
  })
})

test('should set sortBy to amount', () => {
  const state = filtersReducer(undefined, { type: 'SORT_BY_AMOUNT' })
  expect(state.sortBy).toBe('amount')
})

test('should set sortBy to date', () => {
  const currentState = {
    text: '',
    startDate: undefined,
    endDate: undefined,
    sortBy: 'amount'
  }
  const state = filtersReducer(currentState, { type: 'SORT_BY_DATE' })
  expect(state.sortBy).toBe('date')
})

test('should set text filter', () => {
  const action = {
    text: 'filter text',
    type: 'SET_TEXT_FILTER'
  }
  const state = filtersReducer(undefined, action)
  expect(state.text).toEqual('filter text')
})

test('should set startDate filter', () => {
  const action = {
    startDate: 10000,
    type: 'SET_START_DATE'
  }
  const state = filtersReducer(undefined, action)
  expect(state.startDate).toBe(action.startDate)
})

test('should set endDate filter', () => {
  const action = {
    startDate: 12000,
    type: 'SET_END_DATE'
  }
  const state = filtersReducer(undefined, action)
  expect(state.endDate).toBe(action.endDate)
})