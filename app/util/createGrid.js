const createGrid = (n) => {
  const result = [];
  for (let i = 0; i < n; i++) {
    const row = Array.from({ length: n }, () => 0);
    result.push(row);
  }
  return result;
};

export default createGrid;
