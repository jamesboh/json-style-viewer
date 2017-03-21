export const ADD_ROW = 'ADD_ROW';
export const UPDATE_ROW = 'UPDATE_ROW';
export const SAVE_PAGE = 'SAVE_PAGE';
export const LOAD_PAGE = 'LOAD_PAGE';

export const addRow = () => {
  return {
    type: ADD_ROW
  }
};

export const updateRow = (i, value) => {
  return {
    type: UPDATE_ROW,
    i, value
  }
};

export const savePage = newPage => {
  return {
    type: SAVE_PAGE,
    newPage
  };
};

export const loadPage = pageName => {
  return {
    type: LOAD_PAGE,
    pageName
  };
};