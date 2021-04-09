import { getEmployees, getWorklog } from '../api';

/* Types */
export const SET_LOADING = 'HD/APP/SET_LOADING';
export const SET_EMPLOYEES = 'HD/APP/SET_EMPLOYEES';
export const SET_WORKLOG = 'HD/APP/SET_WORKLOG';

/* State */
const initialState = {
  employees: [],
  worklog: [],
  loading: true,
};

export const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOADING:
      return { ...state, loading: action.payload.loading };

    case SET_EMPLOYEES:
      return { ...state, employees: action.payload.employees };

    case SET_WORKLOG:
      return { ...state };

    default:
      return state;
  }
};

/* Actions */
export const setLoading = (loading) => ({
  type: SET_LOADING,
  payload: {
    loading,
  },
});

export const setEmployees = (employees) => ({
  type: SET_EMPLOYEES,
  payload: {
    employees,
  },
});

/* Thunk */
export const fetchEmployeesAsync = () => async (dispatch) => {
  dispatch(setLoading(true));

  try {
    const employees = await getEmployees();

    if (employees) {
      dispatch(setEmployees(employees));
    }
  } catch (error) {
    console.log('Error', { ...error });
  } finally {
    dispatch(setLoading(false));
  }
};
