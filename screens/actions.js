// Действие для успешного получения данных пользователя
export const FETCH_USER_DATA_SUCCESS = 'FETCH_USER_DATA_SUCCESS';

// Создание действия для успешного получения данных пользователя
export const fetchUserDataSuccess = (userData) => ({
  type: FETCH_USER_DATA_SUCCESS,
  payload: userData,
});