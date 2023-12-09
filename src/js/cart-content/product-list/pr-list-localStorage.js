// забрираю массив с локалсторож с помощью метода
export const funLoadFromLS = function loadFromLS(key) {
  const dataCart = localStorage.getItem(key);
  try {
    console.log(JSON.parse(dataCart));
    return JSON.parse(dataCart);
  } catch {
    // console.log(dataCart);
    return dataCart;
  }
};

// удаление одного элемента из локалстораж при клике на крестик
export const funLoadLellOneLS = function LoadLellOneLS(dataCartOne, i) {
  //   const dataCartOne = funLoadFromLS(key);
  //   console.log(dataCartOne);
  // Находим и удаляем нужный объект в массиве
  //   const objectIdToRemove = dataCartOne[i]._id; // ID объекта на удаление
  //   const indexToRemove = dataCartOne.findIndex(
  //     obj => obj.id === objectIdToRemove
  //   );
  //   if (indexToRemove !== -1) {
  //     dataCartOne.splice(indexToRemove, 1);
  //   }
  //   console.log(dataCartOne);
  //   return dataCartOne;
  // Обновляем значение в локальном хранилище
  //   localStorage.setItem(key, JSON.stringify(dataCartOne));
};

// удаление всех элементов из локалстораж при клике на del all
export const funLoadLellAllLS = function LoadLellAllLS(key) {
  localStorage.removeItem(key);
};
