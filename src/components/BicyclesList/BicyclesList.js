import React from 'react';
import { useSelector } from 'react-redux';
import { BicyclesListItem } from '../BicyclesListItem';

export const BicyclesList = () => {
  const bicycles = useSelector((store) => store.bicycles);

  return (
    <div className="row">
      <div className="col-sm-12">
        <h2 className="mb-5">
          Your Rent (Total: $
          {bicycles
            .filter(({ rent_start_time }) => rent_start_time)
            .reduce((acc, val) => acc + val.bicycle_rent_price, 0)}
          )
        </h2>
        <div className="container">
          {bicycles
            .filter(({ rent_start_time }) => rent_start_time)
            .map((bicycle, i) => (
              <BicyclesListItem {...bicycle} key={i} />
            ))}
        </div>
        <h2 className="mb-5">
          Available Bycicles (
          {bicycles.filter(({ rent_start_time }) => !!!rent_start_time).length})
        </h2>
        <div className="container">
          {bicycles
            .filter(({ rent_start_time }) => !!!rent_start_time)
            .map((bicycle, i) => (
              <BicyclesListItem {...bicycle} key={i} />
            ))}
        </div>
      </div>
    </div>
  );
};
