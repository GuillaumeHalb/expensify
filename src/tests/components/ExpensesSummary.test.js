import React from "react";
import { shallow } from "enzyme";
import { ExpensesSummary } from "../../components/ExpensesSummary";
import EXPENSES from "../fixtures/expenses";

test("should render ExpensesSummary with expenses", () => {
  const wrapper = shallow(<ExpensesSummary expenses={EXPENSES} />);
  expect(wrapper).toMatchSnapshot();
});

test("should render ExpensesSummary with empty message", () => {
  const wrapper = shallow(<ExpensesSummary expenses={[]} />);
  expect(wrapper).toMatchSnapshot();
});
