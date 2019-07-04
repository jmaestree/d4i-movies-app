// Intialize state
const initialState = {
  items: [],
};

export default function (state = initialState, action) {
  // Handle each action
  switch (action.type) {
    case 'ADD_DATA_ITEM':
      return { ...state, items: [...state.items, action.payload] };

    case 'EDIT_DATA_ITEM':
      // TODO: Replace item in data
      return state;

    case 'REMOVE_DATA_ITEM':
      // TODO: Remove item in data
      return state;

    default:
      return state;
  }
}
