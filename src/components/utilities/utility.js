// store for Read list

const getStoredData = () => {
  const storedReadListStr = localStorage.getItem("read-book");

  if (storedReadListStr) {
    const storedReadList = JSON.parse(storedReadListStr);

    return storedReadList;
  } else {
    return [];
  }
};

const addToStoreReadList = (id) => {
  const storedList = getStoredData();
  if (storedList.includes(id)) {
    console.log("It's already existed in thr read list");
  } else {
    storedList.push(id);
    const storedListStr = JSON.stringify(storedList);
    localStorage.setItem("read-book", storedListStr);
  }
};

// store for Wish List
const getStoredWishData = () => {
  const storedWishStr = localStorage.getItem("wish-list");
  if (storedWishStr) {
    const storedWishData = JSON.parse(storedWishStr);
    return storedWishData;
  } else {
    return [];
  }
};

const addToStoreWishList = (id) => {
  const storedWishList = getStoredWishData();
  if (storedWishList.includes(id)) {
    console.log("It's already existed in thr read list");
  } else {
    storedWishList.push(id);
    const storedWishListStr = JSON.stringify(storedWishList);
    localStorage.setItem("wish-list", storedWishListStr);
  }
};

export { addToStoreReadList, addToStoreWishList };
