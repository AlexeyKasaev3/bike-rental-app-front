import React from 'react';
import PropTypes from 'prop-types';
import { useField } from 'formik';

export const FormikSelect = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <label className="d-block mb-0 " htmlFor={props.id || props.name}>
        {label}
      </label>
      <select className="form-control" {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="text-danger position-absolute top-100">
          {meta.error}
        </div>
      ) : null}
    </>
  );
};

FormikSelect.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string,
  name: PropTypes.string,
};
