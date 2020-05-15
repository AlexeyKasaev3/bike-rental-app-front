import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Formik, Form } from 'formik';
import { FormikInput } from '../FormikInput';
import { FormikSelect } from '../FormikSelect';

export const AddNewBicycleForm = () => {
  const dispatch = useDispatch();
  const fetchStatus = useSelector((store) => store.addBicycleFormFetchStatus);

  useEffect(() => {
    if (fetchStatus === 'error') {
      setTimeout(() => {
        dispatch({ type: 'BICYCLES_ADD_ERROR_RESET' });
      }, 2000);
    }
  }, [fetchStatus, dispatch]);

  const formikFormSettings = {
    initialValues: {
      bikeName: '',
      bikeType: 'custom',
      rentPrice: '',
    },
    validate: (values) => {
      const errors = {};
      if (!values.bikeName) {
        errors.bikeName = 'Required';
      } else if (values.bikeName.length > 30) {
        errors.bikeName = 'Must be 15 characters or less';
      } else if (!/^\w[\w\s]*\w*$/.test(values.bikeName)) {
        errors.bikeName = 'Only latin characters and numbers allowed';
      }

      if (!values.rentPrice) {
        errors.rentPrice = 'Required';
      } else if (!/^(\d|\.)*$/.test(values.rentPrice)) {
        errors.rentPrice = 'only number and dots allowed';
      } else if (!/^\d{1,4}(\..*)?$/.test(values.rentPrice)) {
        errors.rentPrice = "price can't be bigger than 9999.99";
      } else if (!/^[1-9]\d{0,4}(\.\d{2})?$/.test(values.rentPrice)) {
        errors.rentPrice = 'Enter valid price value';
      }

      return errors;
    },
    onSubmit: (formValues, { setSubmitting, resetForm }) => {
      resetForm();
      dispatch({ type: 'ADD_NEW_BIKE', payload: formValues });
      setSubmitting(false);
    },
  };

  return (
    <Formik {...formikFormSettings}>
      <Form className="mb-5">
        <div className="row">
          <h2 className="mb-3 col-sm-12">Add Bicycle</h2>
          <div className="col-lg-4 position-relative">
            <FormikInput label="Bike name" name="bikeName" type="text" />
          </div>
          <div className="col-lg-4">
            <FormikSelect label="Bike type" name="bikeType">
              <option value="custom">Custom</option>
              <option value="city">City</option>
              <option value="mountain">Mountain</option>
              <option value="road">Road</option>
              <option value="other">Other</option>
            </FormikSelect>
          </div>
          <div className="col-lg-4">
            <div className="row">
              <div className="col-lg-6 position-relative">
                <FormikInput label="Bike price" name="rentPrice" type="text" />
              </div>
              <div className="col-lg-6 d-flex">
                {fetchStatus === 'loading' ? (
                  <button
                    className="w-100 mt-auto btn btn-primary"
                    type="submit"
                    disabled
                  >
                    Loading
                  </button>
                ) : null}
                {fetchStatus === 'error' ? (
                  <button
                    className="w-100 mt-auto btn btn-danger"
                    type="submit"
                    disabled
                  >
                    ERROR
                  </button>
                ) : null}
                {fetchStatus === 'waiting' ? (
                  <button
                    className="w-100 mt-auto btn btn-primary"
                    type="submit"
                  >
                    ADD
                  </button>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </Form>
    </Formik>
  );
};
