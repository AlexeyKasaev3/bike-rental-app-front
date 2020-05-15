import React from 'react';
import { useField } from 'formik';
import PropTypes from 'prop-types';

export const FormikInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <label className="d-block mb-0" htmlFor={props.id || props.name}>
        {label}
      </label>
      <input className="form-control" {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="text-danger position-absolute top-100">
          {meta.error}
        </div>
      ) : null}
    </>
  );
};

FormikInput.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string,
  name: PropTypes.string,
};
