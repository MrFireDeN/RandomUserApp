export const FETCH_USER_DATA_SUCCESS = 'FETCH_USER_DATA_SUCCESS';

export const fetchUserDataSuccess = (userData) => ({
  type: FETCH_USER_DATA_SUCCESS,
  payload: userData,
});
