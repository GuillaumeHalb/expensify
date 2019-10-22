import moment from "moment";
import selectExpenses from "../../selectors/expenses";
import EXPENSES from "../fixtures/expenses";

test("should filter by text value", () => {
  const filters = {
    text: "e",
    sortBy: "date",
    startDate: undefined,
    endDate: undefined
  };
  const result = selectExpenses(EXPENSES, filters);
  expect(result).toEqual([EXPENSES[2], EXPENSES[1]]);
});

test("should filter by startDate", () => {
  const filters = {
    text: "",
    sortBy: "date",
    startDate: moment(0),
    endDate: undefined
  };
  const result = selectExpenses(EXPENSES, filters);
  expect(result).toEqual([EXPENSES[2], EXPENSES[0]]);
});

test("should filter by endDate", () => {
  const filters = {
    text: "",
    sortBy: "date",
    startDate: undefined,
    endDate: moment(0).add(2, "days")
  };
  const result = selectExpenses(EXPENSES, filters);
  expect(result).toEqual([EXPENSES[0], EXPENSES[1]]);
});

test("should sort by date", () => {
  const filters = {
    text: "",
    sortBy: "date",
    startDate: undefined,
    endDate: undefined
  };
  const result = selectExpenses(EXPENSES, filters);
  expect(result).toEqual([EXPENSES[2], EXPENSES[0], EXPENSES[1]]);
});

test("should sort by amount", () => {
  const filters = {
    text: "",
    sortBy: "amount",
    startDate: undefined,
    endDate: undefined
  };
  const result = selectExpenses(EXPENSES, filters);
  expect(result).toEqual([EXPENSES[1], EXPENSES[2], EXPENSES[0]]);
});
