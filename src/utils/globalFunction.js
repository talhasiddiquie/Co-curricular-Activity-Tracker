export const dateCalculate = (fromDate, toDate) => {
    const from = new Date(fromDate);
    const to = new Date(toDate);
    const months = (to.getFullYear() - from.getFullYear()) * 12 + (to.getMonth() - from.getMonth()) + 1;
    return isNaN(months) ? '' : months.toString();
  };