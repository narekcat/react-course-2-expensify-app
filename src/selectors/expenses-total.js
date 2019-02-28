

// Get total amount of expenses
export default (expenses) => {
  return expenses.reduce((acc, expense) => acc + expense.amount, 0);
};