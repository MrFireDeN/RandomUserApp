import { combineReducers } from 'redux';
import { FETCH_USER_DATA_SUCCESS } from './actions';

const initialUserDataState = null; // Устанавливаем в null, если данных пользователя нет

const userDataReducer = (state = initialUserDataState, action) => {
  switch (action.type) {
    case FETCH_USER_DATA_SUCCESS:
      return action.payload; // Возвращаем новые данные пользователя
    default:
      return state;
  }
};

const initialState = {
  userDataArray: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER_DATA_SUCCESS:
      const updatedArray = [...state.userDataArray, action.payload];
      return {
        ...state,
        userDataArray: updatedArray,
      };
    default:
      return state;
  }
};

const combinedReducers = combineReducers({
  userData: userDataReducer, // Используем ключ userData для хранения данных пользователя
  root: rootReducer,
});

export default combinedReducers;
