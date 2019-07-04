export const addItem = item => async (dispatch) => {
  dispatch({
    type: 'ADD_DATA_ITEM',
    payload: item,
  });
};

export const editItem = item => async (dispatch) => {
  dispatch({
    type: 'EDIT_DATA_ITEM',
    payload: item,
  });
};

export const removeItem = item => async (dispatch) => {
  dispatch({
    type: 'REMOVE_DATA_ITEM',
    payload: item,
  });
};
