import React from 'react';
import { useLocation } from 'react-router-dom';
import { dateCalculate } from '../utils/globalFunction';

const ConfirmationPage = () => {
  const location = useLocation();
  const formData = location.state.formData;
  
  const calculateMonth = dateCalculate(formData?.fromDate, formData?.toDate);
  

  return (
    <div className="flex items-center  justify-center min-h-screen h-full bg-gray-100">
    <div className='md:w-6/12 w-full bg-white p-8 rounded shadow-md' >
      <h1 className='text-3xl font-bold text-center mb-6'>Confirmation</h1>
      <div className='grid grid-cols-1 gap-4 mt-4 sm:grid-cols-2 bg-primary p-4'>
       
      <p className='text-lg' >
        <strong>Activity Name:</strong> {formData?.activityName}
      </p>
      <p className='text-lg'>
        <strong >Scope:</strong> {formData?.scope}
      </p>
      <p className='text-lg'>
        <strong>Rank:</strong> {formData?.rank}
      </p>
      <p className='text-lg'>
        <strong>Engagement:</strong> {formData?.engagement}
      </p>
      <p className='text-lg'>
        <strong>From Date:</strong> {formData?.fromDate}
      </p>
      <p className='text-lg'>
        <strong>To Date:</strong> {formData?.toDate}
      </p>

      <p className='text-lg'> <strong>Duration:</strong> {calculateMonth > 1 ?  calculateMonth+' Months' : calculateMonth+' Month'}</p>
      </div>
      
     
    </div>
    </div>
   
  );
};

export default ConfirmationPage;
