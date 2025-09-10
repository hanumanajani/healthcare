import React, { useState } from 'react';
import Seetreatment from './Seetreatment';

function TreatmentDetail() {
  const [date, setDate] = useState('');
  const [pname, setPname] = useState('');
  const [check, setCheck] = useState(false);

  const handleNext = () => {
    if (!pname || !date) {
      alert("Please enter patient username and date!");
      return;
    }
    setCheck(!check);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-base-200 transition-colors duration-500">
      <div className="card w-full max-w-md bg-base-100 shadow-lg rounded-2xl border border-base-300 p-6">
        <h2 className="text-2xl font-semibold text-center text-base-content mb-6">
          Treatment Details
        </h2>

        <div className="flex flex-col gap-4 mb-6">
          <input
            type="text"
            placeholder="Enter patient username"
            value={pname}
            onChange={(e) => setPname(e.target.value)}
            className="input input-bordered input-primary w-full"
          />
          <input
            type="text"
            placeholder="DDMMYYYY"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="input input-bordered input-secondary w-full"
          />
        </div>

        <button
          className="btn btn-accent w-full shadow-md hover:scale-105 transition-transform mb-4"
          onClick={handleNext}
        >
          Next
        </button>

        {check && (
          <div className="mt-4">
            <Seetreatment patient={pname} date={date} />
          </div>
        )}
      </div>
    </div>
  );
}

export default TreatmentDetail;
