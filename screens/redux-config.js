import { createStore } from 'redux';
import rootReducer from './reducers';

const store = createStore(rootReducer);

store.subscribe(() => {
  const state = store.getState(); 
  localStorage.setItem('userDataArray', JSON.stringify(state.userDataArray));
});

export default store;
