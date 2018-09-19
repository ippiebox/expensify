import uuid from 'uuid'; 

// ADD_EXPENSE
export const addExpense = (
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