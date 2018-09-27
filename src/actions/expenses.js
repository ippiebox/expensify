import uuid from 'uuid'; 

// ADD_EXPENSE
export const addExpense = (
  { // destructure
    description = '', //default value if object exist but not this variable
    notes = '', 
    amount = 0, 
    createdAt = 0 
  } = {} //default empty object
) => ({  // return Action object
  type: 'ADD_EXPENSE',
  expense: {
    id: uuid(),
    description: description,
    notes: notes,
    amount: amount,
    createdAt: createdAt
  }
});

// REMOVE_EXPENSE
export const removeExpense = (
  {
    id = ''
  } = {}
) => ({
  type: 'REMOVE_EXPENSE',
  id: id
});

// EDIT_EXPENSE
export const editExpense = (id, updates) => ({
  type: 'EDIT_EXPENSE',
  id: id,
  updates: updates
});