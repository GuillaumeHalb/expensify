import moment from "moment";
// Get visible expenses

export default (expenses, { text, sortBy, startDate, endDate }) => {
  return expenses
    .filter(({ createdAt, description }) => {
      const createdAtMoment = moment(createdAt);
      const startDateMatch = startDate
        ? startDate.isSameOrBefore(createdAtMoment, "day")
        : true;
      const endDateMatch = endDate
        ? endDate.isSameOrAfter(createdAtMoment, "day")
        : true;
      const textMatch = description.toLowerCase().includes(text.toLowerCase());

      return startDateMatch && endDateMatch && textMatch;
    })
    .sort((expense1, expense2) => {
      switch (sortBy) {
        case "date":
          return expense1.createdAt < expense2.createdAt ? 1 : -1;
        case "amount":
          return expense2.amount - expense1.amount;
        default:
          return 0;
      }
    });
};
