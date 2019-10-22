import React from "react";
import { connect } from "react-redux";
import numeral from "numeral";
import selectExpensesTotal from "../selectors/expenses-total";
import selectExpense from "../selectors/expenses";

export const ExpensesSummary = props => (
  <div>
    {props.expenses.length === 0 ? (
      <p>select some expenses</p>
    ) : (
      <p>
        {`Viewing ${props.expenses.length} expense${
          props.expenses.length > 1 ? "s" : ""
        } totalling
          ${numeral(selectExpensesTotal(props.expenses) / 100).format(
            "$0,0.00"
          )}`}
      </p>
    )}
  </div>
);

const mapStateToProps = state => ({
  expenses: selectExpense(state.expenses, state.filters)
});

export default connect(mapStateToProps)(ExpensesSummary);
