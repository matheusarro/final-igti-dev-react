const selectableYears = () : number[] => {
  const firstYear : number = 2003;
  const lastYear : number = 2015;
  const allYears : number[] = [];

  for (let year = firstYear; year <= lastYear; year++) {
    allYears.push(year);
  }

  return allYears;
};

export default selectableYears;