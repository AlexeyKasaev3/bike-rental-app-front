import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AddNewBicycleForm } from './components/forms/AddNewBicycleForm';
import { BicyclesList } from './components/BicyclesList';

function App() {
  const dispatch = useDispatch();
  const bicyclesFetchStatus = useSelector((store) => store.bicyclesFetchStatus);

  useEffect(() => {
    dispatch({ type: 'FETCH_ALL_BICYCLES_DATA' });
  }, [dispatch]);

  return (
    <div className="bg-light h-100 app-wrapper">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 pt-5">
            <h1 className="text-uppercase">Bike rental app</h1>
            <AddNewBicycleForm />
            {bicyclesFetchStatus === 'loading' ? (
              <div className="text-center">Loading...</div>
            ) : null}
            {bicyclesFetchStatus === 'error' ? (
              <div className="text-center">
                Connetion proplems. Try to refresh the page
              </div>
            ) : null}
            {bicyclesFetchStatus === 'waiting' ? <BicyclesList /> : null}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
