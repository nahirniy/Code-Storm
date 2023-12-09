// забрираю массив с локалсторож
export const funLoadFromLS = function loadFromLS(key) {
  const dataCart = localStorage.getItem(key);
  try {
    // console.log(JSON.parse(dataCart));
    return JSON.parse(dataCart);
  } catch {
    // console.log(dataCart);
    return dataCart;
  }
};

// удаление всех элементов из локалстораж при клике на del all
export const funLoadLellAllLS = function LoadLellAllLS(key) {
  localStorage.removeItem(key);
};
