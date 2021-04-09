/* Types */
export const SET_EMPLOYEES = 'HD/APP/SET_EMPLOYEES';
export const SET_WORKLOG = 'HD/APP/SET_WORKLOG';

/* State */
const initialState = {
  employees: [],
  worklog: [],
};

export const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_EMPLOYEES:
      return { ...state };

    case SET_WORKLOG:
      return { ...state };

    default:
      return state;
  }
};

/* Actions */

/* Thunk */
