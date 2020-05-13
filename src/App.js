import React from 'react';
import { Provider, useDispatch, useSelector } from 'react-redux';

function App({ store }) {
  const dispatch = useDispatch();
  dispatch({ type: 'FETCH_ALL_BICYCLES_DATA' });
  return (
    <Provider store={store}>
      <div>Hello World</div>
    </Provider>
  );
}

export default App;
