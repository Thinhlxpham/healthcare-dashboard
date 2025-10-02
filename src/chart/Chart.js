const labelAllMonth = Utils.months({ count: 12 });
const targetMonths = labelAllMonth.filter((month) => {
  const monthIndex = new Date(Date.parse(month + " 1, 2000")).getMonth();
  return monthIndex >= 9;
});

const data = {
  labels: targetMonths,
  datasets: [
    {
      data: [60, 80, 100, 120, 140, 160, 180],
      fill: false,
      borderColor: "#C26EB4",
    },
  ],
};
