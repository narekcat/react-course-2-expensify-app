import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';
import moment from 'moment';

test('should set default state', () => {
  const state = expensesReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual([]);
});

test('should remove expense by id', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: expenses[1].id
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[0], expenses[2]]);
});

test('should not remove expense if id not found', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: '-1'
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});

test('should add an expense', () => {
  const expense = {
    id: '4',
    description: 'I bought a car',
    note: 'Tesla',
    amount: 19500,
    createdAt: moment(0).add(8, 'days').valueOf()
  };
  const action = {
    type: 'ADD_EXPENSE',
    expense
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([...expenses, expense]);
});

test('should edit an expense', () => {
  const updates = {
    description: 'Rent of car',
    note: 'Some note for test'
  };
  const action = {
    type: 'EDIT_EXPENSE',
    id: '2',
    updates
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([
    expenses[0],
    {
      ...expenses[1],
      ...updates
    },
    expenses[2]
  ]);
});

test('should not edit an expense if not found', () => {
  const updates = {
    description: 'Rent of car',
    note: 'Some note for test'
  };
  const action = {
    type: 'EDIT_EXPENSE',
    id: '5',
    updates
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});