import React from 'react';

export default function ValidateResult({ mailData }) {
  return (
    <div className="container">
          <h4 className='mb-3'><b>Your result is:</b></h4>
      {mailData && Object.keys(mailData).length > 0 ? (
        <>
          <p className='my-1'><b>E-Mail: </b>{mailData.email}</p>
          <p className='my-1'><b>User: </b>{mailData.user}</p>
          <p className='my-1'><b>Domain: </b>{mailData.domain}</p>
          <p className='my-1'><b>smtp_check: </b>{mailData.smtp_check}</p>
          <p className='my-1'><b>mx_found: </b>{mailData.mx_found}</p>
          <p className='my-1'><b>Role: </b>{mailData.role}</p>
          <p className='my-1'><b>Disposable: </b>{mailData.disposable}</p>
          <p className='my-1'><b>Score: </b>{mailData.score}</p>
          <p className='my-1'><b>State: </b>{mailData.state}</p>
          <p className='my-1'><b>Reason: </b>{mailData.reason}</p>
          <p className='my-1'><b>Free: </b>{mailData.free}</p>
          <p className='my-1'><b>Format Valid: </b>{mailData.format_valid}</p>
          <p className='my-1'><b>Catch all: </b>{mailData.catch_all}</p>
        </>
      ) : (
        <p>No data available</p>
      )}
    </div>
  );
}
