import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

// ADD_EXPENSE
const addExpense = (
  {
    description = '', 
    notes = '', 
    amount = 0, 
    createAt = 0 
  } = {}
) => ({
  type: 'ADD_EXPENSE',
  expense: {
    id: uuid(),
    description: description,
    notes: notes,
    amount: amount,
    createAt: createAt
  }
});

// REMOVE_EXPENSE
const removeExpense = (
  {
    id = ''
  } = {}
) => ({
  type: 'REMOVE_EXPENSE',
  id: id
});

// EDIT_EXPENSE
const editExpense = (id, updates) => ({
  type: 'EDIT_EXPENSE',
  id: id,
  updates: updates
});

// SET_TEXT_FILTER
const setTextFilter = (filter_text='') => ({
  type: 'SET_TEXT_FILTER',
  filter_text
})

// Expenses Reducers
const expensesReducerDefaultState = [];
const expensesReducer = (state = expensesReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_EXPENSE':
      //return state.concat(action.expense);
      return [
        ...state,
        action.expense
      ]
    case 'REMOVE_EXPENSE':
      return state.filter((expense) => {
        return expense.id !== action.id;
      })
    case 'EDIT_EXPENSE':
      return state.map((expense) => {
        if (expense.id === action.id) {
          return {
            ...expense,
            ...action.updates
          };
        }
        else {
          return expense;
        }
      })
    default:
      return state;
  }
};

// Filters Reducer
const filterReducerDefaultState = {
  text: '',
  sortBy: 'date',
  startDate: undefined,
  endDate: undefined
};
const filterReducer = (state = filterReducerDefaultState, action) => {
  switch (action.type) {
    case 'SET_TEXT_FILTER':
      return {
        ...state,
        text: action.filter_text
      }
    default:
      return state;
  }
};

// Store creation
const store = createStore(
  combineReducers({
    expenses: expensesReducer,
    filters: filterReducer
  })
)

store.subscribe(() => {
  console.log(store.getState());
});

const expenseOne = store.dispatch(addExpense({ description:'Rent', amount:100 }));
const expenseTwo = store.dispatch(addExpense({ description:'Coffee', amount:300 }));

store.dispatch(removeExpense({ id: expenseOne.expense.id }));
store.dispatch(editExpense(expenseTwo.expense.id, {amount:500}));
store.dispatch(setTextFilter('rent'));
store.dispatch(setTextFilter());