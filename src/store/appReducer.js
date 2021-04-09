import { getEmployees, getWorklog } from '../api';

/* Types */
export const INITIALIZE_APP = 'HD/APP/INITIALIZE_APP';
export const SET_LOADING = 'HD/APP/SET_LOADING';
export const SET_EMPLOYEES = 'HD/APP/SET_EMPLOYEES';
export const SET_WORKLOG = 'HD/APP/SET_WORKLOG';

/* State */
const initialState = {
  isInitialized: false,
  loading: true,
  employees: [],
  worklog: [],
};

export const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case INITIALIZE_APP:
      return { ...state, isInitialized: action.payload.value };

    case SET_LOADING:
      return { ...state, loading: action.payload.loading };

    case SET_EMPLOYEES:
      return { ...state, employees: action.payload.employees };

    case SET_WORKLOG:
      return { ...state, worklog: action.payload.worklog };

    default:
      return state;
  }
};

/* Actions */
export const initializeApp = (value) => ({
  type: INITIALIZE_APP,
  payload: {
    value,
  },
});

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

export const setWorklog = (worklog) => ({
  type: SET_WORKLOG,
  payload: {
    worklog,
  },
});

/* Thunk */
export const initializeAppAsync = () => async (dispatch) => {
  try {
    // REQUEST auth me
    const employees = await getEmployees();

    // REQUEST status
    if (employees) {
      dispatch(initializeApp(true));
    }
  } catch (error) {
    console.log('Error', { ...error });
  }
};

export const fetchEmployeesAsync = () => async (dispatch) => {
  dispatch(setLoading(true));

  try {
    const employees = await getEmployees();

    // REQUEST status
    if (employees) {
      dispatch(setEmployees(employees));
    }
  } catch (error) {
    console.log('Error', { ...error });
  } finally {
    dispatch(setLoading(false));
  }
};

export const fetchWorklogAsync = () => async (dispatch) => {
  dispatch(setLoading(true));

  try {
    const worklog = await getWorklog();

    // REQUEST status
    if (worklog) {
      dispatch(setWorklog(worklog));
    }
  } catch (error) {
    console.log('Error', { ...error });
  } finally {
    dispatch(setLoading(false));
  }
};
