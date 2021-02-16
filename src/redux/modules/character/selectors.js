export const getById = (state, id) => state.list.statusById[id];

export const getByStatus = (state) => {
  const { statusFilter, filter, statusById } = state;

  const currentStatus = filter[statusFilter];
  const statusList = [];

  currentStatus.forEach((id) => {
    statusList.push(statusById[id].id);
  });

  return statusList;
};

export const sortAlphabetic = (obj) => {
  const sortObj = Object.keys(obj).map((id)=> [obj[id].name, obj[id].id]).sort((a,b) => a[0].localeCompare(b[0]));
  return sortObj.map((id)=> id[1]);
};

export const validationLike = (likes, id) => {
  return likes.filter(idItem => idItem === id)
}

