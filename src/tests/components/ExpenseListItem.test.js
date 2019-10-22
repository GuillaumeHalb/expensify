import React from "react";
import { shallow } from "enzyme";
import EXPENSES from "../fixtures/expenses";
import ExpenseListItem from "../../components/ExpenseListItem";

test("should render ExpenseListItem correctly", () => {
  const wrapper = shallow(<ExpenseListItem {...EXPENSES[0]} />);
  expect(wrapper).toMatchSnapshot();
});
