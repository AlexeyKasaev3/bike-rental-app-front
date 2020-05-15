import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import {
  rentBicycle,
  rentBicycleCancel,
  deleteBicycle,
} from '../../service/axios';

export const BicyclesListItem = ({
  _id,
  bicycle_name,
  bicycle_type,
  bicycle_rent_price,
  rent_start_time,
}) => {
  const dispatch = useDispatch();
  const [currentFetchProcess, setCurrentFetchProcess] = useState({
    process: false,
    status: 'waiting',
  });

  function rentButtonClickHandler() {
    if (currentFetchProcess.status === 'loading') return;
    setCurrentFetchProcess({ process: 'rent', status: 'loading' });
    rentBicycle(_id)
      .then((res) => {
        setCurrentFetchProcess({ process: false, status: 'waiting' });
        dispatch({
          type: 'RENT_BYCICLE',
          payload: { id: _id, rentStartTime: res.rentStartTime },
        });
      })
      .catch(() => {
        setCurrentFetchProcess({ process: 'rent', status: 'error' });
        setTimeout(
          () => setCurrentFetchProcess({ process: false, status: 'waiting' }),
          1000
        );
      });
  }

  function cancelRentButtonClickHandler() {
    if (currentFetchProcess.status === 'loading') return;
    setCurrentFetchProcess({ process: 'cancel rent', status: 'loading' });
    rentBicycleCancel(_id)
      .then(() => {
        setCurrentFetchProcess({ process: false, status: 'waiting' });
        dispatch({ type: 'RENT_BYCICLE_CANCEL', payload: _id });
      })
      .catch(() => {
        setCurrentFetchProcess({ process: 'cancel rent', status: 'error' });
        setTimeout(
          () => setCurrentFetchProcess({ process: false, status: 'waiting' }),
          1000
        );
      });
  }

  function deleteButtonClickHandler() {
    if (currentFetchProcess.status === 'loading') return;
    setCurrentFetchProcess({ process: 'delete', status: 'loading' });
    deleteBicycle(_id)
      .then(() => {
        setCurrentFetchProcess({ process: false, status: 'waiting' });
        dispatch({ type: 'DELETE_BYCICLE', payload: _id });
      })
      .catch(() => {
        setCurrentFetchProcess({ process: 'delete', status: 'error' });
        setTimeout(
          () => setCurrentFetchProcess({ process: false, status: 'waiting' }),
          1000
        );
      });
  }

  return (
    <div className="row py-3 mb-2 bg-white align-items-center">
      <div className="col-md-8">
        {`${bicycle_name} / ${bicycle_type} / $${bicycle_rent_price}`}
      </div>
      <div className="col-md-2">
        {!rent_start_time ? (
          <div
            className="btn btn-primary w-100"
            onClick={rentButtonClickHandler}
          >
            {currentFetchProcess.process === 'rent' &&
            currentFetchProcess.status === 'loading' ? (
              <i className="fas fa-spinner fa-spin mr-2" />
            ) : null}
            Rent
            {currentFetchProcess.process === 'rent' &&
            currentFetchProcess.status === 'error'
              ? ' - Error'
              : null}
          </div>
        ) : null}
      </div>
      <div className="col-md-2">
        {rent_start_time ? (
          <div
            className="btn btn-primary w-100"
            onClick={cancelRentButtonClickHandler}
          >
            {currentFetchProcess.process === 'cancel rent' &&
            currentFetchProcess.status === 'loading' ? (
              <i className="fas fa-spinner fa-spin mr-2" />
            ) : null}
            Cancel rent
            {currentFetchProcess.process === 'cancel rent' &&
            currentFetchProcess.status === 'error'
              ? ' - Error'
              : null}
          </div>
        ) : (
          <div
            className="btn btn-warning w-100"
            onClick={deleteButtonClickHandler}
          >
            {currentFetchProcess.process === 'delete' &&
            currentFetchProcess.status === 'loading' ? (
              <i className="fas fa-spinner fa-spin mr-2" />
            ) : null}
            Delete
            {currentFetchProcess.process === 'delete' &&
            currentFetchProcess.status === 'error'
              ? ' - Error'
              : null}
          </div>
        )}
      </div>
    </div>
  );
};

BicyclesListItem.propTypes = {
  _id: PropTypes.string.isRequired,
  bicycle_name: PropTypes.string.isRequired,
  bicycle_type: PropTypes.string.isRequired,
  bicycle_rent_price: PropTypes.number.isRequired,
  rent_start_time: PropTypes.number,
};
