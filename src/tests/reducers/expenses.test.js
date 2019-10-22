import expensesReducer from "../../reducers/expenses";
import EXPENSES from "../fixtures/expenses";

test("should set default state", () => {
  const state = expensesReducer(undefined, { type: "@@INIT" });
  expect(state).toEqual([]);
});

test("should remove expense", () => {
  const action = {
    type: "REMOVE_EXPENSE",
    id: EXPENSES[1].id
  };
  const state = expensesReducer(EXPENSES, action);
  expect(state).toEqual([EXPENSES[0], EXPENSES[2]]);
});

test("should not remove expense if id not found", () => {
  const action = {
    type: "REMOVE_EXPENSE",
    id: "-1"
  };
  const state = expensesReducer(EXPENSES, action);
  expect(state).toEqual([EXPENSES[0], EXPENSES[1], EXPENSES[2]]);
});

test("should add an expense", () => {
  const expense = {
    id: "109",
    description: "Laptop",
    note: "",
    createdAt: 20000,
    amount: 29500
  };
  const action = {
    type: "ADD_EXPENSE",
    expense
  };
  const state = expensesReducer(EXPENSES, action);
  expect(state).toEqual([...EXPENSES, expense]);
});

test("should edit an expense", () => {
  const amount = 122000;
  const action = {
    type: "EDIT_EXPENSE",
    id: EXPENSES[1].id,
    updates: {
      amount
    }
  };
  const state = expensesReducer(EXPENSES, action);
  expect(state[1].amount).toBe(amount);
});

test("should not edit expense if expense not found", () => {
  const amount = 122000;
  const action = {
    type: "EDIT_EXPENSE",
    id: "-1",
    updates: {
      amount
    }
  };
  const state = expensesReducer(EXPENSES, action);
  expect(state).toEqual(EXPENSES);
});
