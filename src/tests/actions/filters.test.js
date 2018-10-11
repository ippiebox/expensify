import { setStartDate, setEndDate, setTextFilter, sortByDate, sortByAmount } from '../../actions/filters'
import moment from 'moment'

test('should generate set start date action object', () => {
  const action = setStartDate(moment(0))
  expect(action).toEqual({
    type: 'SET_START_DATE',
    startDate: moment(0)
  })
})

test('should generate set and date action object', () => {
  const action = setEndDate(moment(0))
  expect(action).toEqual({
    type:'SET_END_DATE',
    endDate: moment(0)
  })
})

test('setTextFilter check', () => {
  const action = setTextFilter("hello world")
  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    filter_text: 'hello world'
  })
})

test('setTextFilter default check', () => {
  const action = setTextFilter()
  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    filter_text: ''
  })  
})

test('sortByDate check', () => {
  const action = sortByDate()
  expect(action).toEqual({
    type: 'SORT_BY_DATE'
  })
})

test('sortByAmount check', () => {
  const action = sortByAmount()
  expect(action).toEqual({
    type: 'SORT_BY_AMOUNT'
  })
})