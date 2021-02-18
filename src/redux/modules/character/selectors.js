export const getById = (state, id) => {
  if (state.list.statusById[id]) {
    return state.list.statusById[id];
  } else if (state.search.listSearchById[id]) {
    return state.search.listSearchById[id];
  } else if (state.search.itemVisited[id]) {
    return state.search.itemVisited[id];
  } else {
    return state.comics.listComicById[id];
  }
};

export const getByStatus = (state) => {
  const { statusFilter, filter, statusById } = state;

  const currentStatus = filter[statusFilter];
  const statusList = [];

  currentStatus.forEach((id) => {
    statusList.push(statusById[id].id);
  });

  return statusList;
};

export const getSearchById = (state) => {
  const { filter, listSearchById } = state;

  const currentStatus = filter.all;
  const statusList = [];

  currentStatus.forEach((id) => {
    statusList.push(listSearchById[id].id);
  });

  return statusList;
};

export const getComicsById = (state) => {
  const { filter, listComicById } = state;

  const currentStatus = filter.all;
  const statusList = [];

  currentStatus.forEach((id) => {
    statusList.push(listComicById[id].id);
  });

  return statusList;
};

export const getStatusByLike = (state, typed) => {
  const { like, statusFilter, filter, statusById } = state.list;
  const { listComicById } = state.comics;

  const currentStatus =
    typed === "comics" ? state.comics.filter.all : filter[statusFilter];
  const statusList = [];

  currentStatus.forEach((itemStatus) => {
    like[typed].forEach((itemLike) => {
      if (itemStatus === itemLike) {
        statusList.push(
          typed === "comics"
            ? listComicById[itemStatus].id
            : statusById[itemStatus].id
        );
      }
    });
  });

  return statusList;
};

export const sortAlphabetic = (obj) => {
  const sortObj = Object.keys(obj)
    .map((id) => [obj[id].name, obj[id].id])
    .sort((a, b) => a[0].localeCompare(b[0]));
  return sortObj.map((id) => id[1]);
};

export const validationLike = (likes, typed, id) => {
  if (typed === "comics") {
    return likes.comics.filter((idItem) => idItem === id);
  } else {
    return likes.characters.filter((idItem) => idItem === id);
  }
};
